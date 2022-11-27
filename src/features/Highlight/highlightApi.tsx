import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ArticlesState } from '../../pages/Home/components/Carousel/index.d';

import { API_BASE_URL, API_KEY, NEWS_API } from '../../contants';

export const highlightApi = createApi({
  reducerPath: 'highlightApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ['highlightApi'],
  endpoints: (builder) => ({
    getHighlight: builder.query<ArticlesState, object | void | string>({
      query: (value) => {
        const query = value ? value : '';
        return {
          url: NEWS_API.HIGHLIGHT + query,
          params: { apiKey: API_KEY, country: 'id', pageSize: 10 },
        };
      },
    }),
  }),
});

export const { useGetHighlightQuery } = highlightApi;
