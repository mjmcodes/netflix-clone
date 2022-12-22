import React from "react";

import { TextField } from "src/components/forms";
import { PageBackground } from "src/components/layout";
import { Router, useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/Seo";

const initialValues = {
   email: "",
   password: "",
};

export default function LoginPage() {
   const [form, setForm] = React.useState(initialValues);

   const router = useRouter();

   React.useEffect(() => {
      if (router.query.email) {
         setForm({ ...form, email: router.query.email as string });
      }
   }, [router.isReady]);

   const handleUserSignUp = () => {
      router.push("/browse");
   };

   return (
      <PageBackground>
         <Seo title="Sign Up" />
         <Link href="/" className="fixed top-8 left-8">
            <Image
               src="/images/logo.png"
               alt="NetflixClone Logo"
               height={80}
               width={140}
            />
         </Link>
         <div className="relative z-10 w-full max-w-lg p-12 mx-auto bg-black/80">
            <div className="space-y-3">
               <h1 className="text-3xl font-semibold">
                  Create a password to star your membership
               </h1>
               <div className="text-lg">
                  <p>Just a few more steps and you're done!</p>
                  <p>We hate paperwork, too.</p>
               </div>
               <TextField
                  textLabel="Email address"
                  name="email"
                  value={form.email}
                  handleChange={(val) => setForm({ ...form, email: val })}
               />
               <TextField
                  textLabel="Add a password"
                  name="password"
                  type="password"
                  value={form.password}
                  handleChange={(val) => setForm({ ...form, password: val })}
               />

               <button
                  onClick={handleUserSignUp}
                  className="w-full py-3 !mt-6 text-lg rounded bg-primary"
               >
                  Create account
               </button>

               <p className="text-gray-400 !mt-12">
                  Already have an account?{" "}
                  <Link className="font-semibold text-white" href="/login">
                     Sign in
                  </Link>
               </p>
            </div>
         </div>
      </PageBackground>
   );
}
