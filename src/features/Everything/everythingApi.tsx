import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { ArticlesState } from '../../pages/Home/components/Carousel/index.d';

import { API_BASE_URL, API_KEY, NEWS_API } from '../../contants';

export const everythinghtApi = createApi({
  reducerPath: 'everythinghtApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['everythinghtApi'],
  endpoints: (builder) => ({
    getEverything: builder.query<ArticlesState, object | void | string>({
      query: (value) => {
        const query = value ? value : '';
        return {
          url: NEWS_API.EVERYTHING + query,
          params: { apiKey: API_KEY, pageSize: 10 },
        };
      },
    }),
  }),
});

export const { useGetEverythingQuery } = everythinghtApi;
