import { IClientInitOptions } from './models/index.js';
import { AuthService, ConnectionService, TemplateService } from './services/index.js';

/**
 * This is the Sitecore CDP/Personalize SDK Client
 */
export class Client {
  #options: IClientInitOptions;

  public Templates: TemplateService;

  #authService;

  constructor(options: IClientInitOptions) {
    this.#options = options;

    this.#authService = AuthService(options);

    this.Templates = new TemplateService(options);
  }

  public async Authenticate() {
    this.#options = await this.#authService.Authenticate();
  }
}

// Export Services and Models to assist with referencing
export * from './models/index.js';
export * from './services/index.js';
