import { sortDir } from './common';

export interface CommonRepository<T> {
  findAll?(): Promise<T[]>;
  findOne?(id: number): Promise<T>;
  create?(data: T): Promise<T>;
  update?(id: number, data: T): Promise<T>;
  delete?(id: number): Promise<T>;
}

export interface Filter {
  limit?: number;
  page?: number;
  sort?: string;
  sort_dir?: sortDir;
  search?: string;
}
