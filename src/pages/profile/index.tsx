import React from "react";

import Layout from "@/components/layout";
import authService from "@/services/auth.service";
import { useAppDispatch } from "@/store/store";
import PrivateRotue from "@/components/privateRoute";
import Button from "@/components/Button";

export const Profile = () => {
   const dispatch = useAppDispatch();

   const handleSignOut = () => {
      authService.logOut();
      localStorage.removeItem("selectProfile");
   };

   return (
      <Layout pageTitle="Profile">
         <div className="max-w-4xl px-4 mx-auto text-lg mt-28">
            <h2 className="py-2 mb-8 text-4xl border-b border-white/20">
               Account
            </h2>
            <div>
               <h2 className="py-2 mb-6 text-4xl border-b border-white/20">
                  Settings
               </h2>
               <div className="text-right">
                  <Button onClick={handleSignOut} className="text-red-500">
                     Log out
                  </Button>
               </div>
            </div>
         </div>
      </Layout>
   );
};

export default PrivateRotue(Profile);
