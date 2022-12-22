import React from "react";

import { TextField } from "src/components/forms";
import { PageBackground } from "src/components/layout";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

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

   return (
      <PageBackground>
         <div className="relative z-10 w-full max-w-lg p-12 mx-auto bg-black/80">
            <div className="space-y-4">
               <h1 className="mb-6 text-4xl font-bold">Sign In</h1>
               <TextField
                  textLabel="Email address"
                  name="email"
                  value={form.email}
                  handleChange={(val) => setForm({ ...form, email: val })}
               />
               <TextField
                  textLabel="Password"
                  name="password"
                  type="password"
                  value=""
                  handleChange={(val) => {}}
               />
               <button className="w-full py-3 !mt-8 text-lg rounded bg-primary font-semibold">
                  Sign In
               </button>
            </div>

            <p className="text-gray-400 !mt-12">
               New to Netflix?{" "}
               <Link className="font-semibold text-white" href="/">
                  Sign up now.
               </Link>
            </p>
         </div>
      </PageBackground>
   );
}
