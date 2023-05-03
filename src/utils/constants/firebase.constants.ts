import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

export const fbApp = initializeApp({
   apiKey: process.env.NEXT_PUBLIC_FB_API_KEY,
   authDomain: process.env.NEXT_PUBLIC_FB_AUTH_DOMAIN,
   projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID,
   storageBucket: process.env.NEXT_PUBLIC_STORAGE,
   messagingSenderId: process.env.NEXT_PUBLIC_FB_MESSAGING_ID,
   appId: process.env.NEXT_PUBLIC_FB_APP_ID,
});

const fbFirestore = getFirestore(fbApp);
const fbAuth = getAuth(fbApp);

export { fbFirestore, fbAuth };
