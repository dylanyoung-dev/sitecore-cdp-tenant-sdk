export interface ICollectionResponse<T> {
  href: string;
  offset?: number;
  limit?: number;
  items: T[] | undefined;
}
