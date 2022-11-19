export interface BasicPageParams {
  pageNo: number;
  pageSize: number;
}

export interface BasicFetchResult<T> {
  data: T[];
  totalCount: number;
}
