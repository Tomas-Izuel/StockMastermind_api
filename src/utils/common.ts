export const transformQueryParamsIntoSQLWhere = (query: URLSearchParams) => {
  const where = query.toString()
    ? { where: JSON.parse(query.toString()) }
    : { where: {} };
  console.log(where, ' pitp');
  return where;
};
