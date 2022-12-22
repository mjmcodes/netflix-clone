import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Navbar = () => {
   const [fillHeader, setFillHeader] = React.useState(false);

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
            "fixed top-0 left-0 z-20 w-full py-4 bg-gradient-to-b from-black/70 transition-all duration-500",
            {
               "bg-black": fillHeader,
            }
         )}
      >
         <div className="flex items-center justify-between px-[5%] mx-auto">
            <Link href="/">
               <Image
                  src="/images/logo.png"
                  alt="NetflixClone Logo"
                  height={80}
                  width={100}
               />
            </Link>

            <Image
               src="/images/profile.png"
               alt="User Profile"
               height={30}
               width={30}
            />
         </div>
      </header>
   );
};
