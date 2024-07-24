export interface IResponse<T> {
  href: string;
  offset?: number;
  limit?: number;
  items: T[];
}
