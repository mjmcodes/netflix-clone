import { genres, Movie, TvShow } from "@/utils/constants/movieDb.constants";
import React from "react";
import { XMarkIcon, PlayIcon, PlusIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

type Props = {
   item?: Movie | TvShow;
   onExit: () => void;
};

const DetailModal = ({ item, onExit }: Props) => {
   if (!item) return null;

   const getGenres = () => {
      let genreList: string[] = [];
      Object.keys(genres).forEach((key) => {
         if (item.genre_ids.includes(genres[key])) {
            return genreList.push(key);
         }
      });
      return genreList;
   };

   return (
      <div className="fixed top-0 left-0 z-30 w-screen h-screen overflow-y-scroll bg-black/30">
         <div className="w-full relative max-w-4xl mx-auto bg-[#181818] rounded-lg top-12 z-40 overflow-hidden">
            <button
               onClick={onExit}
               className="absolute z-10 flex items-center justify-center w-10 h-10 bg-black rounded-full right-4 top-4"
            >
               <XMarkIcon className="h-7" />
            </button>
            <div className="h-[40vh] relative">
               <Image
                  src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
                  fill
                  alt={`${item.title || item.original_name}`}
                  className="object-cover"
               />
               <div className="absolute bottom-0 left-0 w-full h-[10vw] bg-gradient-to-t from-[#181818] via-[#181818]/60"></div>
            </div>
            <div className="relative p-12 -mt-28">
               <h1 className="text-4xl font-semibold">
                  {item.title || item.original_name}
               </h1>
               <div className="flex items-center gap-4 mt-4">
                  <button className="flex items-center gap-2 px-6 py-1 text-lg font-semibold text-black bg-white rounded">
                     <PlayIcon className="h-8" />
                     Play
                  </button>
                  <button className="flex items-center gap-2 p-1.5 text-lg font-semibold text-white border rounded-full p- border-white/30">
                     <PlusIcon className="h-7" />
                  </button>
               </div>
               <div className="flex gap-4 mt-4">
                  <p className="font-semibold text-green-500">21% Match</p>
                  <p>2022</p>
                  <p>2h 55m</p>
               </div>
               <div className="flex gap-16 mt-4">
                  <p className="flex-1">{item.overview}</p>

                  <div className="w-[200px]">
                     {getGenres().map((genre) => (
                        <span className="inline-block mr-2">{genre},</span>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default DetailModal;
