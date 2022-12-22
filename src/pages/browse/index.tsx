import React from "react";
import {
   BrowseLayout,
   FeaturedBanner,
   CardsCarousel,
} from "@/components/layout";
import { useEffect } from "react";

import { Movie, MovieDBRequest } from "@/utils/constants/movieDb.constants";

export default function Browse() {
   const [featured, setFeatured] = React.useState<Movie | undefined>(undefined);
   const [originals, setOriginals] = React.useState<Movie[]>([]);
   const [popular, setPopular] = React.useState<Movie[]>([]);

   useEffect(() => {
      (async () => {
         const response = await Promise.all([
            MovieDBRequest.fetchMovies("now_playing"),
            MovieDBRequest.fetchNetflixOriginals(),
         ]);

         setFeatured(
            response[0].results[
               Math.floor(Math.random() * response[0].results.length - 1)
            ]
         );
         setPopular(response[0].results);
         setOriginals(response[1].results);
      })();
   }, []);

   return (
      <BrowseLayout>
         <FeaturedBanner
            title={featured?.title}
            description={featured?.overview}
            bgImageUrl={featured?.backdrop_path}
         />

         <CardsCarousel
            title="Netflix Originals"
            isPoster
            data={originals.map((item) => ({
               posterPath: item.poster_path,
               id: item.id,
            }))}
         />

         <CardsCarousel
            title="Popular Movies"
            data={popular.map((item) => ({
               posterPath: item.backdrop_path,
               id: item.id,
            }))}
         />
      </BrowseLayout>
   );
}
