import { Client, IClientInitOptions, RegionOptions } from '../client';

describe('Auth', () => {
  let client: Client;

  beforeEach(() => {
    // Initialize the client instance before each test
    const clientOptions: IClientInitOptions = {
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      region: RegionOptions.US,
    };
  });
});
