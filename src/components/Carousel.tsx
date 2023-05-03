import React from "react";
import Image from "next/image";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode, Navigation } from "swiper";
import { Movie, TvShow } from "@/utils/constants/movieDb.constants";
import DetailModal from "./DetailModal";

type Props = {
   title: string;
   data: Movie[] | TvShow[];
};

const Carousel = ({ data, title }: Props) => {
   const prevRef = React.useRef(null);
   const nextRef = React.useRef(null);

   const [selectedItem, setSelectedItem] = React.useState<
      Movie | TvShow | undefined
   >(undefined);

   return (
      <div className="relative z-20 mt-12 overflow-visible">
         <h2 className="text-2xl pl-[5%] font-semibold mb-4">{title}</h2>
         <div className="relative">
            <Swiper
               className="px-[5%]"
               slidesPerView={"auto"}
               spaceBetween={8}
               slidesPerGroup={5}
               speed={700}
               navigation={{
                  nextEl: nextRef.current,
                  prevEl: prevRef.current,
               }}
               modules={[Navigation, FreeMode]}
               freeMode={{
                  enabled: true,
               }}
               onInit={(swiper) => {
                  // @ts-ignore
                  swiper.params.navigation!.prevEl = prevRef.current;
                  // @ts-ignore
                  swiper.params.navigation!.nextEl = nextRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
               }}
               // breakpoints={{
               //    1300: {
               //       slidesPerView: 4,
               //    },
               //    1400: {
               //       slidesPerView: 5,
               //    },
               // }}
            >
               {/* slides */}
               {data.map((item) => (
                  <SwiperSlide key={item.id} className="w-[14vw]">
                     <div
                        onClick={() => setSelectedItem(item)}
                        className="relative h-[20vw] top-0 left-0 w-full"
                     >
                        <Image
                           src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                           alt={`background`}
                           loading="eager"
                           className="relative object-cover rounded"
                           fill
                        />
                     </div>
                     <p className="pr-2 mt-2 text-white truncate">
                        {/* @ts-ignore */}
                        {item.title || item.original_name}
                     </p>
                  </SwiperSlide>
               ))}
            </Swiper>
            {/* arrows */}
            <div
               className={`absolute bottom-0 left-0 w-full flex items-center justify-between h-full`}
            >
               <button
                  className="hover:bg-gradient-to-r from-black hover:via-black/70 transition-all h-full w-[5%] z-10"
                  ref={prevRef}
               >
                  <ChevronLeftIcon className="h-[2vw] mx-auto" />
               </button>
               <button
                  className="hover:bg-gradient-to-l from-black hover:via-black/70 h-full w-[5%] z-10"
                  ref={nextRef}
               >
                  <ChevronRightIcon className="h-[2vw] mx-auto" />
               </button>
            </div>
         </div>
         <DetailModal
            item={selectedItem}
            onExit={() => setSelectedItem(undefined)}
         />
      </div>
   );
};

export default Carousel;
