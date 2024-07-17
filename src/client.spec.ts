import { expect } from 'chai';
import { Client, IClientInitOptions, RegionOptions } from './client.js';

describe('Client', () => {
  let client: Client;

  beforeEach(() => {
    // Initialize the client instance before each test
    client = new Client({
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      region: RegionOptions.US,
    } as IClientInitOptions);
  });

  it('should be defined', () => {
    // Test if the client instance is defined
    expect(client).to.be.an.instanceOf(Client);
  });

  it('Check if correct region url is set for client', () => {
    // Test if the client instance has the correct region set
    expect(client.options.region).to.equal('api-engage-us.sitecorecloud.io');
  });
});
