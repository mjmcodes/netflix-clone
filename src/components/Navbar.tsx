import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import cn from "classnames";

import { useAppSelector } from "@/store/store";

const Navbar = () => {
   const [fillHeader, setFillHeader] = React.useState(false);
   const [toggleMenu, setToggleMenu] = React.useState(false);

   const { isAuth } = useAppSelector((state) => state.auth);

   React.useEffect(() => {
      window.addEventListener("scroll", () => {
         if (window.scrollY > 100 && !fillHeader) {
            setFillHeader(true);
         } else setFillHeader(false);
      });
   }, []);

   return (
      <header
         className={cn(
            "fixed top-0 left-0 w-full z-20 py-4 px-[5%] flex items-center justify-between bg-gradient-to-b from-black/70 transition-all duration-500",
            {
               "bg-black": fillHeader,
            }
         )}
      >
         <div className="flex items-center">
            <Link href="/browse">
               <Image
                  src="/images/logo.png"
                  alt="NetflixClone Logo"
                  height={80}
                  width={120}
               />
            </Link>

            <ul className="flex items-center space-x-20 ml-20">
               <li>
                  <Link href="/browse">Home</Link>
               </li>
               <li>
                  <Link href="/browse/movies">Movies</Link>
               </li>
               <li>
                  <Link href="/browse/tv">Tv Shows</Link>
               </li>
            </ul>
         </div>

         <Link href="/profile">
            <Image
               src="/images/profile.png"
               alt="User Profile"
               height={30}
               width={30}
            />
         </Link>

         <button
            className="md:hidden"
            onClick={() => setToggleMenu((prev) => !prev)}
         >
            {toggleMenu ? (
               <XMarkIcon className="h-8" />
            ) : (
               <Bars3Icon className="h-8" />
            )}
         </button>
      </header>
   );
};

export default Navbar;
