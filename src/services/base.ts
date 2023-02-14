import fetch from 'node-fetch';
import { IClientInitOptions } from '../models/index.js';

/**
 * This is the Base Service used by all other services (except Auth)
 * @param clientOptions Client initialization options
 * @returns BaseService
 */
export class BaseService {
  private clientOptions: IClientInitOptions;

  constructor(options: IClientInitOptions) {
    this.clientOptions = options;
  }

  private Fetch = async (method: string, path: string, body: object | null | undefined) => {
    if (!this.clientOptions.region) {
      throw 'You did not provide a valid region when you initialized the client';
    }

    if (!this.clientOptions.accessToken) {
      throw 'You must run the auth command first to initialize the CLI';
    }

    let data = body !== null && body !== undefined ? JSON.stringify(body) : null;

    return await fetch(`https://${this.clientOptions.region}/${path}`, {
      method,
      body: data,
      headers: {
        Authorization: `Bearer ${this.clientOptions.accessToken}`,
        'Content-Type': 'application/json',
      },
    });
  };

  public Get = async (path: string) => {
    return await this.Fetch('get', path, null);
  };

  public Post = async (path: string, body: object | null | undefined) => {
    return await this.Fetch('post', path, body);
  };

  public Put = async (path: string, body: object | null | undefined) => {
    return await this.Fetch('put', path, body);
  };

  public Delete = async (path: string, body: object | null | undefined) => {
    return await this.Fetch('delete', path, body);
  };
}
