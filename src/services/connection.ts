import { Connection, IClientInitOptions } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Connection Service
 * @param clientOptions Client initialization options
 */
export class ConnectionService extends BaseService {
  constructor(options: IClientInitOptions) {
    super(options);
  }

  public GetAll = async (): Promise<Connection[] | null> => {
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

  public GetByRef = async (ref: string): Promise<Connection | null> => {
    try {
      const response = await this.Get(`v2/connections/${ref}`);

      if (response.ok) {
        let connection: Connection = (await response.json()) as Connection;

        return connection;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public Test = async (connection: Connection): Promise<void> => {};
}
