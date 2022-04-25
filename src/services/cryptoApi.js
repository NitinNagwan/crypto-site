import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Host": "crypto-news-live3.p.rapidapi.com",
  "X-RapidAPI-Key": "2b944f0273msh634d19693fe34bcp1ad8cdjsna013a9bb9c8a",
};

const baseUrl = "https://crypto-news-live3.p.rapidapi.com";

const createRequest = (url) => ({
  url,
  headers: cryptoApiHeaders,
});

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getNews: builder.query({
      query: () => createRequest("/news"),
    }),
  }),
});

export const { useGetNewsQuery } = cryptoApi;

