import MarketSector from './preferences/MarketSector';
import UserESGConcerns from './preferences/UserESGConcerns';

export default class User {
  username: string;
  email: string;
  password: string;
  concerns: UserESGConcerns;
  sectorInterests: MarketSector[];

  constructor(
    username: string,
    email: string,
    password: string,
    concerns: UserESGConcerns,
    sectorInterests: MarketSector[]
  ) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.concerns = concerns;
    this.sectorInterests = sectorInterests;
  }
}
