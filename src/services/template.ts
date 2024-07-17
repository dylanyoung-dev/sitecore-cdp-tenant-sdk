import { Client } from '../client.js';
import { Template, TemplateType } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Template Service
 * @param client client
 */
export class TemplateService extends BaseService {
  constructor(client: Client) {
    super(client);
  }

  /**
   * Get all templates
   * @param {TemplateType} [templateType]
   *        Pass in a template type to filter by type
   * @returns Promise<Template[]> Returns an array of templates
   */
  public GetAll = async (templateType?: TemplateType): Promise<Template[] | undefined> => {
    try {
      let requestUrl = `v3/templates`;

      if (templateType) {
        requestUrl = `v3/templates?type=${templateType.toUpperCase()}`;
      }

      const response = await this.Get(requestUrl);

      if (response.ok) {
        let templates: Template[] = (await response.json()) as Template[];

        return templates;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Get a template by reference
   * @param {string} templateRef
   *        Pass in a template reference (Id or FriendlyId) to get a specific template
   * @returns Promise<Template> Returns a template object
   */
  public GetByRef = async (templateRef: string): Promise<Template | undefined> => {
    try {
      const response = await this.Get(`v3/templates/${templateRef}`);

      if (response.ok) {
        let template: Template = (await response.json()) as Template;

        return template;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Update a template
   * @param {Template} template
   *        Pass in a template object to update
   * @returns Promise<Template> Returns an updated template object
   */
  public Update = async (template: Template): Promise<Template | undefined> => {
    try {
      const response = await this.Put(`v3/templates/${template.ref}`, template);

      if (response.ok) {
        const result: Template = (await response.json()) as Template;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Create a template
   * @param {Template} template
   *        Pass in a template object to create
   * @returns Promise<Template> Returns a new template object
   */
  public Create = async (template: Template): Promise<Template | undefined> => {
    try {
      const response = await this.Post(`v3/templates`, template);

      if (response.ok) {
        const result: Template = (await response.json()) as Template;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
