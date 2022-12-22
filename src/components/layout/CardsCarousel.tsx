import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import cn from "classnames";
import { Navigation, FreeMode } from "swiper";
import Image from "next/image";
import Link from "next/link";

type Props = {
   title: string;
   data: { posterPath: string; id: number }[];
   isPoster?: boolean;
};

export const CardsCarousel = ({ data, title, isPoster = false }: Props) => {
   const prevRef = React.useRef(null);
   const nextRef = React.useRef(null);

   return (
      <div className="relative mt-12 group">
         <h2 className="pl-[5%] mb-4 text-2xl font-bold">{title}</h2>
         <Swiper
            className="lg:pl-[5%]"
            slidesPerView={"auto"}
            spaceBetween={8}
            slidesPerGroup={2}
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
            breakpoints={{
               768: {
                  slidesPerGroup: 3,
               },
            }}
         >
            {data.map((item) => (
               <SwiperSlide
                  key={item.id}
                  className={cn("w-[20vw] rounded overflow-hidden", {
                     "!w-[13vw]": isPoster,
                  })}
               >
                  <Link
                     href="/"
                     className={cn("h-[12vw] w-full relative block", {
                        "!h-[20vw]": isPoster,
                     })}
                  >
                     <Image
                        src={`https://image.tmdb.org/t/p/w500/${item.posterPath}`}
                        alt={`background`}
                        loading="eager"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        fill
                     />
                  </Link>
               </SwiperSlide>
            ))}
         </Swiper>
         <div className="absolute bottom-0 left-0 flex items-center justify-between w-full">
            <button
               ref={prevRef}
               className={cn(
                  "h-[12vw] w-[5%] bg-gradient-to-r from-black z-10",
                  {
                     "!h-[20vw]": isPoster,
                  }
               )}
            >
               <ChevronLeftIcon className="h-[3vw] mx-auto" />
            </button>
            <button
               ref={nextRef}
               className={cn(
                  "h-[12vw] w-[5%] bg-gradient-to-l from-black z-10",
                  { "!h-[20vw]": isPoster }
               )}
            >
               <ChevronRightIcon className="h-[3vw] mx-auto" />
            </button>
         </div>
      </div>
   );
};
