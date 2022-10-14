import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type HeaderSettings = {
  title: string;
  subtitle: string;
  openIcon: string;
  closeIcon: string;
  bgImage: string;
};

export const settingsApi = createApi({
  reducerPath: 'settingsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://192.168.0.136:5000/api/',
  }),

  endpoints: (build) => ({
    getHeader: build.query<HeaderSettings, void>({
      query: () => ({
        url: `settings`,
      }),
    }),
  }),
});

export const { useGetHeaderQuery } = settingsApi;
