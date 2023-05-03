import React from "react";
import { useEffect } from "react";

import {
   Movie,
   MovieDBRequest,
   TvShow,
} from "@/utils/constants/movieDb.constants";
import PrivateRotue from "src/components/privateRoute";
import Layout from "src/components/layout";
import FeaturedHero from "@/components/FeaturedHero";
import Carousel from "@/components/Carousel";

const Browse = () => {
   const [featured, setFeatured] = React.useState<Movie | undefined>(undefined);
   const [tvShows, setTvShows] = React.useState<TvShow[]>([]);
   const [popular, setPopular] = React.useState<Movie[]>([]);

   useEffect(() => {
      (async () => {
         const response = await Promise.all([
            MovieDBRequest.fetchMovies("now_playing"),
            MovieDBRequest.fetchPopularShows(),
         ]);

         const ranIndex =
            Math.floor(Math.random() * response[0].results.length - 1) + 1;

         setFeatured(response[0].results[ranIndex]);
         setPopular(response[0].results);
         setTvShows(response[1].results);
      })();
   }, []);

   return (
      <Layout>
         <FeaturedHero
            title={featured?.title}
            description={featured?.overview}
            bgImageUrl={featured?.backdrop_path}
         />

         <Carousel title="Popular Movies" data={popular} />

         <Carousel title="Popular Tv Shows" data={tvShows} />
      </Layout>
   );
};

export default PrivateRotue(Browse);
