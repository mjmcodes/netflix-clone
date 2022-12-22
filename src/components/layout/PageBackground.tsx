import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

type Props = {
   children: React.ReactNode;
};

export function PageBackground({ children }: Props) {
   const router = useRouter();

   return (
      <>
         <header className="fixed top-0 left-0 z-10 w-full py-8">
            <div className="container flex items-center justify-between px-8 mx-auto">
               <Link href="/">
                  <Image
                     src="/images/logo.png"
                     alt="NetflixClone Logo"
                     height={80}
                     width={140}
                  />
               </Link>
               {router.pathname == "/" && (
                  <Link
                     className="px-6 py-1.5 text-lg rounded bg-primary"
                     href="/login"
                  >
                     Login
                  </Link>
               )}
            </div>
         </header>
         <div
            className="relative flex flex-col items-center justify-center h-screen bg-center bg-cover"
            style={{ backgroundImage: "url(/images/landing-bg.jpg)" }}
         >
            <div className="relative z-10 w-full">{children}</div>

            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black"></div>
         </div>
      </>
   );
}
