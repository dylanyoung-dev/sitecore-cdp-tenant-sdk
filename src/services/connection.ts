import { IClientInitOptions, IConnection } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Connection Service
 * @param clientOptions Client initialization options
 */
export class ConnectionService extends BaseService {
  constructor(options: IClientInitOptions) {
    super(options);
  }

  public GetAll = async (): Promise<IConnection[] | null> => {
    try {
      const response = await this.Get(`v2/connections`);

      if (response.ok) {
        let connections: IConnection[] = (await response.json()) as IConnection[];

        return connections;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public GetByRef = async (ref: string): Promise<IConnection | null> => {
    try {
      const response = await this.Get(`v2/connections/${ref}`);

      if (response.ok) {
        let connection: IConnection = (await response.json()) as IConnection;

        return connection;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public Test = async (connection: IConnection): Promise<void> => {};
}
