import React from "react";

import { TailSpin } from "react-loader-spinner";

type Props = {
   text: string;
   loading?: boolean;
   classes?: string;
   onClick: () => void;
};

const Button = ({ text, loading, classes, onClick }: Props) => {
   return (
      <button
         className={`py-2.5 w-full rounded text-lg font-semibold flex items-center justify-center ${classes} ${
            loading ? "bg-primary/80" : "bg-primary"
         }`}
         disabled={loading}
         onClick={onClick}
      >
         {loading ? (
            <TailSpin
               height="25"
               width="25"
               color="white"
               ariaLabel="tail-spin-loading"
               radius="2"
               wrapperStyle={{}}
               wrapperClass=""
               visible={loading}
            />
         ) : (
            text
         )}
      </button>
   );
};

export default Button;
