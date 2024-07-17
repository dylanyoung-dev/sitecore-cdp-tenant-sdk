export interface Response<T> {
  href: string;
  offset?: number;
  limit?: number;
  items: T[];
}
