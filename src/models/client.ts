export interface IClientInitOptions {
  clientId: string;
  clientSecret: string;
  region: RegionOptions;
  accessToken?: string;
}

export enum RegionOptions {
  EU = 'api-engage-eu.sitecorecloud.io',
  US = 'api-engage-us.sitecorecloud.io',
  APJ = 'api-engage-ap.sitecorecloud.io',
}
