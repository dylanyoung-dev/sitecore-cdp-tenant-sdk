import { Client } from '../client.js';
import { Connection } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Connection Service
 * @param {Client} client Sitecore Personalize Client
 */
export class ConnectionService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Get all connections
   * @returns Promise<Connection[]> Returns an array of connections
   */
  public GetAll = async (): Promise<Connection[] | undefined> => {
    try {
      const response = await this.Get(`v2/connections`);

      if (response.ok) {
        let connections: Connection[] = (await response.json()) as Connection[];

        return connections;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Get a connection by reference
   * @param {string} connectionRef
   *        Pass in a connection reference (Id or FriendlyId) to get a specific connection
   * @returns Promise<Connection> Returns a connection object
   */
  public GetByRef = async (connectionRef: string): Promise<Connection | undefined> => {
    try {
      const response = await this.Get(`v2/connections/${connectionRef}`);

      if (response.ok) {
        let connection: Connection = (await response.json()) as Connection;

        return connection;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
