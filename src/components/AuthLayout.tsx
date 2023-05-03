import Image from "next/image";
import Link from "next/link";
import React from "react";
import Seo from "./seo";

type Props = {
   title?: string;
   children: React.ReactNode;
};

const AuthLayout = ({ title, children }: Props) => {
   return (
      <section className="flex flex-col items-center justify-center h-screen">
         <Seo title={title} />
         <header className="absolute top-0 z-20 flex items-center justify-between w-full px-12 pt-6">
            <Link href="/">
               <Image
                  src="/images/logo.png"
                  alt="NetflixClone Logo"
                  height={80}
                  width={160}
               />
            </Link>
            <Link
               href="/login"
               className="px-5 py-1 text-lg rounded bg-primary"
            >
               Sign In
            </Link>
         </header>

         <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-black/80"></div>
         <div className="absolute bottom-0 left-0 z-10 w-full h-full bg-gradient-to-t from-black/70"></div>
         <Image
            src="/images/landing-bg.jpg"
            alt=""
            fill
            className="z-0 object-cover"
         />
         <div className="relative z-10 w-full">{children}</div>
      </section>
   );
};

export default AuthLayout;
