import { fbAuth, fbFirestore } from "@/utils/constants/firebase.constants";
import {
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
} from "firebase/auth";

import { getErrorMessage } from "@/utils/helpers/firebase.helpers";

import { doc, setDoc } from "firebase/firestore";

const login = async (email: string, password: string) => {
   try {
      await signInWithEmailAndPassword(fbAuth, email, password);
   } catch (error: any) {
      const errorCode = error.code;
      throw new Error(getErrorMessage(errorCode));
   }
};

const register = async (email: string, password: string) => {
   try {
      const result = await createUserWithEmailAndPassword(
         fbAuth,
         email,
         password
      );
      const user = result.user;

      await saveRegisterUser({ id: user.uid, email });
   } catch (error: any) {
      const errorCode = error.code;
      throw new Error(getErrorMessage(errorCode));
   }
};

const saveRegisterUser = async (userData: { id: string; email: string }) => {
   const userRef = doc(fbFirestore, "users", userData.id);
   try {
      await setDoc(userRef, {
         ...userData,
         created: new Date().toISOString(),
      });
   } catch (error) {}
};

const logOut = () => signOut(fbAuth);

export default {
   register,
   login,
   logOut,
};
