import { useAppSelector } from "@/store/store";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

const PrivateRotue = (ProtectedPage: NextPage) => {
   const AuthenticatedPage = () => {
      const { isAuth, userData } = useAppSelector((state) => state.auth);

      const router = useRouter();

      React.useEffect(() => {
         if (!isAuth && isAuth !== null) {
            router.push("/login");
         }
      }, [isAuth]);

      return isAuth ? <ProtectedPage /> : null;
   };

   return AuthenticatedPage;
};

export default PrivateRotue;
