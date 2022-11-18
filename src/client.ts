import { IClientInitOptions } from './models/index.js';
import { AuthService, ConnectionService, TemplateService } from './services/index.js';

/**
 * This is the Sitecore CDP/Personalize SDK Client
 */
class Client {
  #options: IClientInitOptions;

  #authService;

  constructor(options: IClientInitOptions) {
    this.#options = options;

    this.#authService = AuthService(options);
  }

  public async authenticate() {
    this.#options = await this.#authService.Authenticate();
  }

  public templates() {
    const templateService = TemplateService(this.#options);

    return templateService;
  }

  public connections() {
    const connectionService = ConnectionService(this.#options);

    return connectionService;
  }
}

export default Client;
