type UserESGConcerns = {
  environment: number;
  social: number;
  governance: number;
};
enum MarketSector {
  MATERIALS,
  INDUSTRIALS,
  FINANCIALS,
  ENERGY,
  CONSUMER_DISCRETIONARY,
  INFORMATION_TECHNOLOGY,
  COMMUNICATION_SERVICES,
  REAL_ESTATE,
  HEALTH_CARE,
  CONSUMER_STAPLES,
  UTILITIES,
}
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
