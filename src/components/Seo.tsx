import Head from "next/head";
import React from "react";

type Props = {
   title?: string;
};

const Seo = ({ title }: Props) => {
   const defaultTitle = "Home - Netflix";

   return (
      <Head>
         <title>{title ? `${title} - Netflix` : defaultTitle}</title>
      </Head>
   );
};

export default Seo;
