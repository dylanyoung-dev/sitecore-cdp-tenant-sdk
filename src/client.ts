import { IClientInitOptions } from './models/index.js';
import { AuthService, ConnectionService, TemplateService } from './services/index.js';

/**
 * This is the Sitecore CDP/Personalize SDK Client
 */
export class Client {
  #options: IClientInitOptions;

  #authService;

  constructor(options: IClientInitOptions) {
    this.#options = options;

    this.#authService = AuthService(options);
  }

  public async Authenticate() {
    this.#options = await this.#authService.Authenticate();
  }

  public Templates() {
    const templateService = TemplateService(this.#options);

    return templateService;
  }

  public Connections() {
    const connectionService = ConnectionService(this.#options);

    return connectionService;
  }
}

// Export Services and Models to assist with referencing
export * from './models/index.js';
export * from './services/index.js';
