import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type HeaderSettings = {
  title: string;
  subtitle: string;
  openIcon: string;
  closeIcon: string;
  bgImage: string;
};

export type Category = {
  id: number;
  name: string;
  description: string;
  //extra?: string;
};

type Feedback = {
  id: number;
  title: string;
  description: string;
  upvotes: number;
  category: string;
  comments: Object[];
};

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
  }),

  endpoints: (build) => ({
    getHeader: build.query<HeaderSettings, void>({
      query: () => ({
        url: `uiSettings`,
      }),
    }),
    getCategories: build.query<Category[], void>({
      query: () => ({
        url: `categories`,
      }),
    }),
    getFeedbacks: build.query<Feedback[], string | undefined>({
      query: (params) => ({
        url:
          params !== undefined ? `productRequests${params}` : `productRequests`,
      }),
    }),
  }),
});

export const {
  useGetHeaderQuery,
  useGetCategoriesQuery,
  useGetFeedbacksQuery,
} = settingsApi;
