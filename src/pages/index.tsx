import React from "react";
import { useRouter } from "next/router";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import AuthLayout from "@/components/AuthLayout";

export default function LandingPage() {
   const [email, setEmail] = React.useState("");
   const [showErrMsg, setShowErrMsg] = React.useState(false);

   const router = useRouter();

   const handleGetStarted = () => {
      const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (email !== "" && email.match(mailformat)) {
         router.push(`/sign-up?email=${email}`);
      } else {
         setShowErrMsg(true);
      }
   };

   return (
      <AuthLayout>
         <div className="max-w-3xl mx-auto space-y-4 text-center">
            <h1 className="font-semibold text-7xl">
               Unlimited movies, TV shows, and more.
            </h1>
            <h2 className="text-3xl">Watch anywhere. Cancel anytime.</h2>
            <p className="text-xl">
               Ready to watch? Enter your email to create or restart your
               membership.
            </p>
            <div className="flex">
               <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-5 font-semibold text-black rounded-l outline-none"
               />
               <button
                  className="flex items-center gap-2 px-4 text-xl font-semibold rounded-r bg-primary"
                  onClick={handleGetStarted}
               >
                  Get Started
                  <ChevronRightIcon className="h-6" />
               </button>
            </div>
            {showErrMsg && (
               <div className="absolute font-semibold -translate-y-2">
                  *Please enter a valid email address.
               </div>
            )}
         </div>
      </AuthLayout>
   );
}
