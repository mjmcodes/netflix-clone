import Image from "next/image";
import React from "react";
import { useEffect } from "react";

type Props = {
   title?: string;
   description?: string;
   bgImageUrl?: string;
};

export const FeaturedBanner: React.FC<Props> = ({
   title,
   description,
   bgImageUrl,
}) => {
   return (
      <div className="h-[45vw] flex flex-col justify-center relative -mb-20">
         <div className="absolute top-0 right-0 z-0 w-[85%] h-full pointer-events-none">
            <Image
               className="object-cover"
               src={`https://image.tmdb.org/t/p/original/${bgImageUrl}`}
               alt=""
               loading="eager"
               fill
            />
         </div>

         <div className="relative z-10 px-[5%]">
            <h1 className="max-w-xl text-6xl font-bold">{title}</h1>
            <p className="max-w-2xl mt-4 text-lg text-white/70">
               {description && description.slice(0, 200)}...
            </p>
         </div>
         <div className="absolute bottom-0 left-0 z-0 w-1/2 h-full pointer-events-none bg-gradient-to-r from-black via-black"></div>
         <div className="absolute bottom-0 left-0 z-0 w-full h-[100px] bg-gradient-to-t from-black pointer-events-none"></div>
      </div>
   );
};
