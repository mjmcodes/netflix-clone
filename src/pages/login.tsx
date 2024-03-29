import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import authService from "@/services/auth.service";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import AuthLayout from "@/components/AuthLayout";

const initialValues = {
   email: "",
   password: "",
};

export default function SignIn() {
   const [form, setForm] = React.useState(initialValues);
   const [errMsg, setErrMsg] = React.useState<string | undefined>(undefined);
   const [loading, setLoading] = React.useState(false);
   const router = useRouter();

   React.useEffect(() => {
      if (router.query.email) {
         setForm({ ...form, email: router.query.email as string });
      }
   }, [router.isReady]);

   const handleUserLogin = async () => {
      if (!form.email || !form.password) {
         setErrMsg("Please enter all fields");
         return;
      }

      try {
         setLoading(true);
         await authService.login(form.email, form.password);
         router.push("/browse");
      } catch (error: any) {
         setErrMsg(error.message);
         setLoading(false);
      }
   };

   return (
      <AuthLayout>
         <div className="max-w-md p-16 mx-auto space-y-3 rounded bg-black/70">
            {errMsg && <div>{errMsg}</div>}
            <h1 className="text-3xl font-semibold !mb-6">Sign In</h1>

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
               value={form.password}
               handleChange={(val) => setForm({ ...form, password: val })}
            />

            <Button
               onClick={handleUserLogin}
               text="Sign In"
               classes="!mt-12"
               loading={loading}
            />

            <div className="!mt-12 text-white/60">
               <p>
                  New to Netflix?{" "}
                  <Link className="font-semibold text-white" href="/">
                     Sign up now.
                  </Link>
               </p>
               <p className="mt-4 text-sm">
                  This page is protected by Google reCAPTCHA to ensure you are
                  not a bot.
               </p>
            </div>
         </div>
      </AuthLayout>
   );
}
