import { AuthToken, IClientInitOptions } from './models/index.js';
import { AuthService, ConnectionService, TemplateService } from './services/index.js';

/**
 * This is the Sitecore CDP/Personalize SDK Client
 */
export class Client {
  options: IClientInitOptions;
  #authService;
  #tokenExpiration: Date | null = null;

  public Templates: TemplateService;
  public Connections: ConnectionService;

  constructor(options: IClientInitOptions) {
    this.options = options;

    this.#authService = AuthService(options);

    this.Templates = new TemplateService(this);
    this.Connections = new ConnectionService(this);
  }

  private async ensureAuthenticated() {
    const now = new Date();
    if (!this.#tokenExpiration || now >= this.#tokenExpiration) {
      await this.authenticate();
    }
  }

  private async authenticate() {
    const authResponse: AuthToken | null = await this.#authService.Authenticate(); // Assuming this returns an object with token details

    if (!authResponse) {
      throw new Error('Authentication failed');
    }

    this.options.accessToken = authResponse.access_token;
    this.#tokenExpiration = new Date(new Date().getTime() + authResponse.expires_in * 1000);
  }

  public async requestWithAuthCheck(requestFunction: () => Promise<any>) {
    await this.ensureAuthenticated();
    return requestFunction();
  }
}

// Export Services and Models to assist with referencing
export * from './models/index.js';
export * from './services/index.js';
