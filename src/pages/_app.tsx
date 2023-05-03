import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import React from "react";
import { store, useAppDispatch, useAppSelector } from "@/store/store";
import { onAuthStateChanged } from "firebase/auth";

import { setUser } from "@/store/authSlice";
import { fbAuth } from "@/utils/constants/firebase.constants";

function MyApp({ Component, pageProps }: AppProps) {
   const AppWrapper = () => {
      const { isAuth } = useAppSelector((state) => state.auth);
      const dispatch = useAppDispatch();

      React.useEffect(() => {
         onAuthStateChanged(fbAuth, (user) => {
            dispatch(setUser(user ?? undefined));
         });
      }, []);

      if (isAuth == null) return null;
      return <Component {...pageProps} />;
   };

   return (
      <Provider store={store}>
         <AppWrapper />
      </Provider>
   );
}

export default MyApp;
