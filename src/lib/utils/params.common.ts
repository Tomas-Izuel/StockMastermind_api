import { CommonPaginationParams } from '../validators/common.validator';

export const paginateParams = (params: CommonPaginationParams) => {
  const page = parseInt(params.page) || 1;
  const pageSize = parseInt(params.page_size) || 10;
  const search = params.search || '';
  const sort = params.sort || 'id';
  const sortDir = params.sort_dir || 'asc';

  return {
    page,
    pageSize,
    search,
    sort,
    sortDir,
  };
};
