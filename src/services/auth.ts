import { AuthToken } from '../models/auth.js';
import fetch, { Response } from 'node-fetch';
import { IClientInitOptions } from '../models/index.js';

/**
 * This is the Authentication Service
 * @param clientOptions Client initialization options
 * @returns AuthService
 */
export const AuthService = (clientOptions: IClientInitOptions) => {
  /**
   * Authenticate using oAuth Client Credentials Flow
   * @returns Promise<IClientInitOptions>
   */
  const Authenticate = async (): Promise<AuthToken | null> => {
    const servicePath = `https://${clientOptions.region}/v2/oauth/token`;

    const params = new URLSearchParams();

    params.append('grant_type', 'client_credentials');
    params.append('clientKey', clientOptions.clientId);

    const response: Response = await fetch(servicePath, {
      method: 'post',
      body: params,
      headers: {
        Authorization: `Basic ${Buffer.from(
          `${clientOptions.clientId}:${clientOptions.clientSecret}`
        ).toString('base64')}`,
      },
    });

    if (response.ok) {
      let authToken: AuthToken | null = await (response.json() as Promise<AuthToken>);

      return authToken;
    } else {
      throw new Error("Couldn't authenticate");
    }

    return null;
  };

  return { Authenticate };
};
