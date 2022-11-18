export interface IClientInitOptions {
  clientId: string;
  clientSecret: string;
  region: RegionOptions;
  accessToken?: string;
}

export enum RegionOptions {
  EU = 'api.boxever.com',
  US = 'api-us.boxever.com',
  APJ = 'api-ap-southeast-2-production.boxever.com',
}
