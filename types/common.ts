export interface Filter {
  limit?: number;
  page?: number;
  sort?: string;
  sort_dir?: 'ASC' | 'DESC';
  search?: string;
}

export interface CommonRepository<T> {
  findAll?(): Promise<T[]>;
  findOne?(id: number): Promise<T | null>;
  create?(data: T): Promise<T>;
  update?(id: number, data: T): Promise<T>;
  delete?(id: number): Promise<T>;
}

export interface CommonResponse<T> {
  data: T;
  message: string;
  status: number;
}
