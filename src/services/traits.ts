import { BaseService, Client, ICollectionResponse } from '../client';
import { ISessionTrait } from '../models/trait';

/**
 * This is the Session Trait Service
 * @param {Client} client Sitecore Personalize Client
 */
export class SessionTraitService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Get all Session Traits
   * @param {number} limit
   *        The number of session traits to retrieve (default is 10)
   * @param {number} offset
   *        The offset for pagination (default is 0)
   * @returns Promise<ICollectionResponse<ISessionTrait> | undefined> Returns an array of session traits
   * @throws Error
   *       Throws an error if the request fails
   */
  public GetAll = async (
    limit: number = 10,
    offset: number = 0
  ): Promise<ICollectionResponse<ISessionTrait> | undefined> => {
    try {
      const response = await this.Get(`v1/sessionTraits`);

      console.log(JSON.stringify(await response.json(), null, 2));

      if (response.ok) {
        let sessionTraits: ICollectionResponse<ISessionTrait> =
          (await response.json()) as ICollectionResponse<ISessionTrait>;

        return sessionTraits;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
