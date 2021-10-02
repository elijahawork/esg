type UserESGConcerns = {
  environment: number;
  social: number;
  governance: number;
}
export default class User {
  username: string;
  email: string;
  password: string;
  concerns: UserESGConcerns;
  constructor(username: string, email: string, password: string, concerns: UserESGConcerns) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.concerns = concerns;
  }
}
