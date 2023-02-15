import { IClientInitOptions, Template, TemplateType } from '../models/index.js';
import { BaseService } from './base.js';

/**
 * This is the Template Service
 * @param clientOptions Client initialization options
 */
export class TemplateService extends BaseService {
  constructor(options: IClientInitOptions) {
    super(options);
  }

  /**
   * Get all common templates filtered by type
   * @param templateType
   *        Pass in a template type to filter by (ex. 'Decision, Web, Audience')
   * @returns Promise<Template[]> Returns a list of templates
   */
  public GetAll = async (templateType: TemplateType): Promise<Template[] | null> => {
    try {
      const response = await this.Get(`v3/templates`);

      if (response.ok) {
        let templates: Template[] = (await response.json()) as Template[];

        return templates;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public GetById = async (friendlyId: string): Promise<Template | null> => {
    try {
      const response = await this.Get(`v3/templates/${friendlyId}`);

      if (response.ok) {
        let template: Template = (await response.json()) as Template;

        return template;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public Update = async (template: Template): Promise<Template | null> => {
    try {
      const response = await this.Put(`v3/templates/${template.ref}`, template);

      if (response.ok) {
        const result: Template = (await response.json()) as Template;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };

  public Create = async (template: Template): Promise<Template | null> => {
    try {
      const response = await this.Post(`v3/templates`, template);

      if (response.ok) {
        const result: Template = (await response.json()) as Template;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }

    return null;
  };
}
