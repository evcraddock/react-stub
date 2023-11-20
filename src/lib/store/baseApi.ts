import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: '/api',
});

export const baseApi = createApi({
  reducerPath: 'projectApi',
  baseQuery,
  refetchOnMountOrArgChange: 15 * 60,
  tagTypes: ['Project'],
  endpoints: () => ({}),
});

export default baseApi;
