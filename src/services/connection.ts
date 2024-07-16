import { Client } from '../client.js';
import { Connection } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Connection Service
 * @param clientOptions Client initialization options
 */
export class ConnectionService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  public GetAllConnections = async (): Promise<Connection[] | null> => {
    try {
      const response = await this.Get(`v2/connections`);

      if (response.ok) {
        let connections: Connection[] = (await response.json()) as Connection[];

        return connections;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };
}
