import React from "react";
import NavBar from "./Navbar";
import Seo from "./seo";

type Props = {
   pageTitle?: string;
   children: React.ReactNode;
};

const Layout = ({ children, pageTitle }: Props) => {
   return (
      <>
         <Seo title={pageTitle} />
         <NavBar />
         <main className="pb-12">{children}</main>
      </>
   );
};

export default Layout;
