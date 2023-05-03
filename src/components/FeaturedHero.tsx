import Image from "next/image";
import React from "react";

type Props = {
   title?: string;
   description?: string;
   bgImageUrl?: string;
};

const FeaturedHero: React.FC<Props> = ({ title, description, bgImageUrl }) => {
   return (
      <div className="h-[75vh] min-h-[600px] relative -mb-32">
         <div className="absolute top-0 right-0 w-[85%] h-full">
            <Image
               src={`https://image.tmdb.org/t/p/original${bgImageUrl}`}
               alt=""
               loading="eager"
               className="object-cover"
               fill
            />
         </div>

         <div className="relative z-10 px-[5%] h-full flex flex-col items-start justify-center">
            <h1 className="text-6xl max-w-lg font-bold">{title}</h1>
            <p className="max-w-lg text-lg mt-4 text-white/70">
               {description && description.slice(0, 250)}...
            </p>
         </div>
         <div className="absolute top-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/90 h-full" />
         <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black h-8" />
      </div>
   );
};

export default FeaturedHero;
