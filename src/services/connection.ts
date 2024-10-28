import { Client } from '../client.js';
import { ICollectionResponse, IConnection } from '../models/index.js';
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
   * @param {number} limit
   *       The number of connections to retrieve (default is 10)
   * @param {number} offset
   *      The offset for pagination (default is 0)
   * @returns Promise<ICollectionResponse<Connection[]>> Returns an array of connections
   */
  public GetAll = async (
    limit: number = 10,
    offset: number = 0
  ): Promise<ICollectionResponse<IConnection> | undefined> => {
    try {
      const response = await this.Get(`v2/connections?limit=${limit}&offset=${offset}`);

      if (response.ok) {
        let connections: ICollectionResponse<IConnection> =
          (await response.json()) as ICollectionResponse<IConnection>;

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
   * @returns Promise<IConnection | undefined> Returns a connection object
   */
  public GetByRef = async (connectionRef: string): Promise<IConnection | undefined> => {
    try {
      const response = await this.Get(`v2/connections/${connectionRef}`);

      if (response.ok) {
        let connection: IConnection = (await response.json()) as IConnection;

        return connection;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
