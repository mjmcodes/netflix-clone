import axios, { AxiosResponse } from "axios";
import queryString from "query-string";

type Category = "upcoming" | "top_rated" | "popular" | "now_playing" | "latest";

export type MovieDBApiRespose = {
   results: any[];
   page: number;
   total_pages: number;
   total_results: number;
};

export type Movie = {
   backdrop_path: string;
   genre_ids: number[];
   id: number;
   original_title: string;
   overview: string;
   popularity: number;
   poster_path: string;
   release_date: string;
   title: string;
   video: boolean;
   vote_average: number;
   vote_count: number;
   runtime: string;
};

export type TvShow = {
   backdrop_path: string;
   first_air_date: string;
   genre_ids: number[];
   id: number;
   original_name: string;
   overview: string;
   popularity: number;
   poster_path: string;
   vote_average: number;
   vote_count: number;
};

const BASE_URL = `https://api.themoviedb.org/3`;

const axiosClient = axios.create({
   baseURL: BASE_URL,
   params: {
      api_key: process.env.NEXT_PUBLIC_MOVIEDB_APIKEY,
      language: "en-US",
   },
   paramsSerializer: {
      serialize: (params) => queryString.stringify({ ...params }),
   },
});

const genres = {
   Action: 28,
   Adventure: 12,
   Animation: 16,
   Comedy: 35,
   Crime: 80,
   Documentary: 99,
   Drama: 18,
   Family: 10751,
   Fantasy: 14,
   History: 36,
   Horror: 27,
   Music: 10402,
   Mystery: 9648,
   Romance: 10749,
   ScienceFiction: 878,
   TVMovie: 1077,
   Thriller: 53,
   War: 10752,
   Western: 37,
};

export const PosterLink = `https://image.tmdb.org/t/p/w500`;
export const BackdropLink = `https://image.tmdb.org/t/p/original`;

const getRequest = async (queryString: string) => {
   try {
      const { data } = await axiosClient(queryString);
      return data;
   } catch (error: any) {
      throw new Error("Failed to fetch data with error:", error);
   }
};

export const MovieDBRequest = {
   fetchMovies: (category: Category): Promise<MovieDBApiRespose> =>
      getRequest(`/movie/${category}`),
   fetchNetflixOriginals: () => getRequest("/discover/tv?with_networkds=213"),
   fetchMovieByGenre: (genre: keyof typeof genres) =>
      getRequest(`/discover/movie?with_genres=${genres[genre]}`),
};
