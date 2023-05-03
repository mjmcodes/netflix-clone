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

export default function LoginPage() {
   const [form, setForm] = React.useState(initialValues);
   const [errMsg, setErrMsg] = React.useState<string | undefined>(undefined);
   const [loading, setLoading] = React.useState(false);
   const router = useRouter();

   React.useEffect(() => {
      if (router.query.email) {
         setForm({ ...form, email: router.query.email as string });
      }
   }, [router.isReady]);

   const handleUserSignUp = async () => {
      if (!form.email || !form.password) {
         setErrMsg("Please enter all fields");
         return;
      }
      try {
         setLoading(true);
         await authService.register(form.email, form.password);
         router.push("/browse");
      } catch (error: any) {
         setErrMsg(error.message);
         setLoading(false);
      }
   };

   return (
      <AuthLayout title="Sign Up">
         <div className="max-w-md p-16 bg-black/70 rounded mx-auto space-y-3">
            <h1 className="text-7xl font-semibold"></h1>
            {errMsg && <div>{errMsg}</div>}

            <h1 className="text-2xl font-semibold">
               Create a password to star your membership
            </h1>
            <div className="!mb-8">
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

            <Button
               text="Create account"
               classes="!mt-12"
               onClick={handleUserSignUp}
               loading={loading}
            />

            <div className="!mt-12 text-white/60">
               Already have an account?{" "}
               <Link className="text-white font-semibold" href="/login">
                  Sign in
               </Link>
            </div>
         </div>
      </AuthLayout>
   );
}
