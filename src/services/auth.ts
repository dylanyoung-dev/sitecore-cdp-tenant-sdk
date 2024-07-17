import fetch, { Response } from 'node-fetch';
import { AuthToken } from '../models/auth.js';
import { IClientInitOptions } from '../models/index.js';

/**
 * This is the Authentication Service
 * @param clientOptions Client initialization options
 * @returns AuthService
 */
export const AuthService = (clientOptions: IClientInitOptions) => {
  /**
   * Authenticate using oAuth Client Credentials Flow (Cloud Portal Only)
   * @returns Promise<IClientInitOptions>
   */
  const Authenticate = async (): Promise<AuthToken | undefined> => {
    const servicePath = `https://auth.sitecorecloud.io/oauth/token`;
    const params = new URLSearchParams();

    params.append('grant_type', 'client_credentials');
    params.append('client_id', clientOptions.clientId);
    params.append('client_secret', clientOptions.clientSecret);
    params.append('audience', 'https://api.sitecorecloud.io');

    const response: Response = await fetch(servicePath, {
      method: 'post',
      body: params,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      let authToken: AuthToken | null = await (response.json() as Promise<AuthToken>);

      return authToken;
    } else {
      throw new Error("Couldn't authenticate");
    }
  };

  return { Authenticate };
};
