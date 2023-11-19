import IEpisodeResponse from '../interfaces/IEpisodeResponse';
import IEpisodesResponse from '../interfaces/IEpisodesResponse';
import IGetAllEpisodesArgs from '../interfaces/IGetAllEpisodesArgs';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ROOT = 'https://stapi.co/api/v1/rest/';

export const episodesApi = createApi({
  reducerPath: 'episodesApi',
  baseQuery: fetchBaseQuery({ baseUrl: ROOT }),
  endpoints: (builder) => ({
    getAllEpisodes: builder.query<IEpisodesResponse, IGetAllEpisodesArgs>({
      query: ({ term, pageNumber, pageSize }) => ({
        url: `episode/search?${buildSearchParams(pageNumber, pageSize)}`,
        method: 'post',
        body: new URLSearchParams({ title: term, name: term }).toString(),
        headers: {
          'Content-type': 'application/x-www-form-urlencoded',
        },
      }),
    }),
    getEpisodeById: builder.query<IEpisodeResponse, string>({
      query: (uid) => `episode?uid=${uid}`,
    }),
  }),
});

const buildSearchParams = (pageNumber?: number, pageSize?: number) => {
  let searchParams = '';
  if (pageNumber) {
    searchParams += `pageNumber=${pageNumber}`;
  }
  if (pageSize) {
    searchParams += `&pageSize=${pageSize}`;
  }
  return searchParams;
};

export const { useGetAllEpisodesQuery, useGetEpisodeByIdQuery } = episodesApi;
