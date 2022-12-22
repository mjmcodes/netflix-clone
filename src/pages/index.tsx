import React from "react";
import cn from "classnames";
import { useRouter } from "next/router";

import { PageBackground } from "src/components/layout";
import Seo from "@/components/Seo";

export default function LandingPage() {
   const [email, setEmail] = React.useState("");
   const [focused, setFocused] = React.useState(false);
   const [showErrMsg, setShowErrMsg] = React.useState(false);

   const router = useRouter();

   function toggleFocus() {
      if (showErrMsg) setShowErrMsg(false);
      if (focused && email !== "") return;
      setFocused((prevState) => !prevState);
   }

   const handleGetStarted = () => {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email !== "" && email.match(mailformat)) {
         router.push(`/signup?email=${email}`);
      } else {
         setShowErrMsg(true);
      }
   };

   return (
      <PageBackground>
         <Seo />
         <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h1 className="font-semibold text-7xl">
               Unlimited movies, TV shows, and more.
            </h1>
            <p className="text-3xl">Watch anywhere. Cancel anytime.</p>
            <p className="text-xl">
               Ready to watch? Enter your email to create or restart your
               membership.
            </p>
            <div className="flex">
               <div className="relative flex-1 overflow-hidden text-black bg-white rounded-l">
                  <label
                     className={cn(
                        "absolute text-gray-500 pointer-events-none top-5 left-4 font-semibold transition-all",
                        { "-translate-y-3 text-sm": focused }
                     )}
                     htmlFor="email"
                  >
                     Email address
                  </label>
                  <input
                     onFocus={toggleFocus}
                     onBlur={toggleFocus}
                     className="flex-1 w-full h-full px-4 pt-8 pb-4 outline-none"
                     onChange={(e) => setEmail(e.target.value)}
                     type="email"
                     id="email"
                  />
               </div>
               <button
                  onClick={handleGetStarted}
                  className="flex items-center px-8 text-2xl font-semibold rounded-r bg-primary"
               >
                  Get Started
               </button>
            </div>
            {showErrMsg && (
               <span className="absolute block text-sm font-semibold text-left text-yellow-400 -translate-y-4">
                  Please enter a valid email address.
               </span>
            )}
         </div>
      </PageBackground>
   );
}
