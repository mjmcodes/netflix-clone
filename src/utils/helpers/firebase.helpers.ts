export const getErrorMessage = (errorCode: any): string => {
   switch (errorCode) {
      case "auth/wrong-password":
         return "Incorrect password, try again!";
      case "auth/user-not-found":
         return "There is no user with that email.";
      case "auth/email-already-in-use":
         return "This email is already in use.";
      case "auth/invalid-email":
         return "Please enter a valid email address";
      default:
         return "Something went wrong.";
   }
};
