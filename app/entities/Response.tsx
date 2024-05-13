export interface FetchResponse<T> {
  statusCode: number;
  isSuccess: boolean;
  errorMessages: string[];
  result: T[];
  count: number;
}
