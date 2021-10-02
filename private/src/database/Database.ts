import fs, { PathLike } from 'fs';
import { join } from 'path';
import User from './User';

export namespace Database {
  export class Database {
    private usernameToUser: Map<string, User> = new Map<string, User>();
    private path: PathLike;

    constructor(databasePathRelativeToEntryPoint: string) {
      this.path = join(__dirname, databasePathRelativeToEntryPoint);
      const databaseTextFile = fs.readFileSync(this.path, 'utf-8');

      const users = JSON.parse(databaseTextFile) as unknown as User[];

      if (!Array.isArray(users))
        throw new Error('Database structure is invalid (not array).');

      users.forEach((user) => this.addUser(user));
    }
    public save() {
      fs.writeFileSync(this.path, this.serialize());
    }
    private serialize(): string {
      return JSON.stringify(this.getUserArray());
    }
    private getUserArray(): User[] {
      const userIterator: IterableIterator<User> = this.usernameToUser.values();

      // convert from iterator to array
      const userArray: User[] = [...userIterator];

      return userArray;
    }
    public addUser(user: User): void {
      if (this.usernameToUser.has(user.username))
        throw new Error(`User with username ${user.username} already exists.`);
      this.usernameToUser.set(user.username, user);
    }
    public removeUser(username: string): void {
      if (!this.userExists(username))
        throw new Error(
          `Cannot delete user with username ${username} as user does not exist.`
        );
      this.usernameToUser.delete(username);
    }
    public getUser(username: string, password: string): User {
      // who cares about security, no password check
      if (!this.userExists(username))
        throw new Error(
          `Cannot get user with username ${username} as user does not exist.`
        );
      return this.usernameToUser.get(username)!;
    }
    public userExists(username: string): boolean {
      return this.usernameToUser.has(username);
    }
  }
}
