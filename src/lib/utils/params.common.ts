import { CommonPaginationParams } from '../validators/common.validator';

export const paginateParams = <T extends CommonPaginationParams>(params: T) => {
  const page = Number(params.page) || 1;
  const pageSize = Number(params.page_size) || 10;
  const search = params.search || '';
  const sort = params.sort || 'id';
  const sortDir = params.sort_dir || 'desc';

  return {
    ...params,
    page,
    pageSize,
    search,
    sort,
    sortDir,
  };
};
