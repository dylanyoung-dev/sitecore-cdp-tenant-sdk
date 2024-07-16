import { expect } from 'chai';
import { Client } from './client.js';

describe('Client', () => {
  let client: Client;

  beforeEach(() => {
    // Initialize the client instance before each test
    //client = new Client();
  });

  it('should be defined', () => {
    // Test if the client instance is defined
    expect(client).to.be.an.instanceOf(Client);
  });
});
