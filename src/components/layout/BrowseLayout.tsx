import Head from "next/head";
import React from "react";
import Seo from "../Seo";
import { Navbar } from "./Navbar";

type Props = {
   pageTitle?: string;
   children: React.ReactNode;
};

export const BrowseLayout = ({ children, pageTitle }: Props) => {
   return (
      <>
         <Navbar />
         <Seo title={pageTitle} />
         <main className="pb-12">{children}</main>
      </>
   );
};
