export interface CommonResponse<T> {
  data: T;
  message: string;
  status: number;
}
