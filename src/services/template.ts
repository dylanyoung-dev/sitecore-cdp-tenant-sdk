import { Client } from '../client.js';
import {
  IResponse,
  ITemplate,
  ITemplateElement,
  ITestTemplateOutput,
  ITestTemplateRenderOutput,
  TemplateType,
} from '../models/index.js';
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
   * @returns Promise<IResponse<ITemplate[]> | undefined> Returns a response collection with an array of templates
   */
  public GetAll = async (
    templateType?: TemplateType
  ): Promise<IResponse<ITemplate[]> | undefined> => {
    try {
      let requestUrl = `v3/templates`;

      if (templateType) {
        requestUrl = `v3/templates?type=${templateType.toUpperCase()}`;
      }

      const response = await this.Get(requestUrl);

      if (response.ok) {
        let templates: IResponse<ITemplate[]> | undefined = (await response.json()) as IResponse<
          ITemplate[]
        >;

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
   * @returns Promise<ITemplate | undefined> Returns a template object
   */
  public GetByRef = async (templateRef: string): Promise<ITemplate | undefined> => {
    try {
      const response = await this.Get(`v3/templates/${templateRef}`);

      if (response.ok) {
        let template: ITemplate = (await response.json()) as ITemplate;

        return template;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Test a new template with custom variables (great if you want to see how a custom template will render with custom variables)
   * @param {ITemplateElement[]} templateElements
   *        Pass in an array of template elements to test
   * @param {any} variables
   *        Pass in an object of variables to test ex. { "name": "John Doe" }
   * @returns Promise<ITestTemplateOutput | undefined> Returns a test template output
   */
  public TestTemplateVariables = async (
    templateElements: ITemplateElement[],
    variables: any
  ): Promise<ITestTemplateOutput | undefined> => {
    try {
      const response = await this.Post(`v3/templates/process`, {
        templates: templateElements,
        templateVariables: variables,
      });

      if (response.ok) {
        let result: ITestTemplateOutput = (await response.json()) as ITestTemplateOutput;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Test a template by friendlyId with custom variables (great if you want to see how a custom template will render with custom variables)
   * @param {string} friendlyId
   *        Pass in a template friendlyId to test
   * @param {any} templateParams
   *        Pass in an object of variables to test ex. { "name": "John Doe" }
   * @returns Promise<ITestTemplateRenderOutput | undefined> Returns a test template render output
   */
  public TestTemplateRender = async (friendlyId: string, templateParams: any) => {
    try {
      const response = await this.Post(`v3/templates/renderTemplates`, {
        templates: { test: { friendlyId, templateParams } },
      });

      if (response.ok) {
        let jsonResult = await response.json();

        let result: ITestTemplateRenderOutput = jsonResult as ITestTemplateRenderOutput;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Update a template
   * @param {ITemplate} template
   *        Pass in a template object to update
   * @returns Promise<ITemplate | undefined> Returns an updated template object
   */
  public Update = async (template: ITemplate): Promise<ITemplate | undefined> => {
    try {
      const response = await this.Put(`v3/templates/${template.ref}`, template);

      if (response.ok) {
        const result: ITemplate = (await response.json()) as ITemplate;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };

  /**
   * Create a template
   * @param {ITemplate} template
   *        Pass in a template object to create
   * @returns Promise<ITemplate | undefined> Returns a new template object
   */
  public Create = async (template: ITemplate): Promise<ITemplate | undefined> => {
    try {
      const response = await this.Post(`v3/templates`, template);

      if (response.ok) {
        const result: ITemplate = (await response.json()) as ITemplate;

        return result;
      }
    } catch (ex) {
      throw new Error(ex as string);
    }
  };
}
