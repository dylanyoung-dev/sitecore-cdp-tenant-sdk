import { Connection, IClientInitOptions } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Connection Service
 * @param clientOptions Client initialization options
 */
export const ConnectionService = (clientOptions: IClientInitOptions) => {
  const service = BaseService(clientOptions);

  const GetAllConnections = async (): Promise<Connection[] | null> => {
    try {
      const response = await service.Get(`v2/connections`);

      if (response.ok) {
        let connections: Connection[] = (await response.json()) as Connection[];

        return connections;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  return { GetAllConnections };
};
