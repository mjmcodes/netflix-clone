import { useAppSelector } from "@/store/store";
import Image from "next/image";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import cn from "classnames";

const ProfileSelect = () => {
   const [showPicker, setShowPicker] = useState(true);
   const { userData } = useAppSelector((state) => state.auth);

   const username = userData.email.slice(0, userData.email.indexOf("@"));

   useEffect(() => {
      if (localStorage.getItem("selectProfile")) {
         setShowPicker(false);
      }
   }, []);

   const handleSelection = () => {
      localStorage.setItem("selectProfile", JSON.stringify(userData.email));
      setShowPicker(false);
   };

   return (
      <section
         className={cn(
            "fixed top-0 left-0 z-30 w-full h-full bg-black flex items-center flex-col justify-center",
            {
               "opacity-0 -z-10 pointer-events-none": !showPicker,
            }
         )}
      >
         <h1 className="text-7xl">Who's watching?</h1>
         <div className="mt-12">
            <button
               onClick={handleSelection}
               className="text-center group cursor-pointer"
            >
               <Image
                  height={120}
                  width={120}
                  src="/images/profile.png"
                  alt="User profile avatar"
                  className="object-contain mx-auto group-hover:border-2"
               />
               <p className="text-2xl text-gray-500 mt-4 group-hover:text-white">
                  {username}
               </p>
            </button>
         </div>
      </section>
   );
};

export default ProfileSelect;
