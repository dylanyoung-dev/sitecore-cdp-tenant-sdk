import { IAuthToken, IClientInitOptions } from './models/index.js';
import {
  AuthService,
  ConnectionService,
  DecisionService,
  FlowService,
  TemplateService,
} from './services/index.js';

/**
 * This is the Sitecore Personalize Client
 * @param {IClientInitOptions} options Client initialization options
 */
export class Client {
  options: IClientInitOptions;
  #authService;
  #tokenExpiration: Date | null = null;

  public Templates: TemplateService;
  public Connections: ConnectionService;
  public Flows: FlowService;
  public Decisions: DecisionService;

  constructor(options: IClientInitOptions) {
    this.options = options;

    this.#authService = AuthService(options);

    this.Templates = new TemplateService(this);
    this.Connections = new ConnectionService(this);
    this.Flows = new FlowService(this);
    this.Decisions = new DecisionService(this);
  }

  private async ensureAuthenticated() {
    const now = new Date();
    if (!this.#tokenExpiration || now >= this.#tokenExpiration) {
      await this.authenticate();
    }
  }

  private async authenticate() {
    const authResponse: IAuthToken | undefined = await this.#authService.Authenticate(); // Assuming this returns an object with token details

    if (!authResponse) {
      throw new Error(
        "Authentication failed - Double check that you've configured the client correctly"
      );
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
export * from './schema/index.js';
export * from './services/index.js';
