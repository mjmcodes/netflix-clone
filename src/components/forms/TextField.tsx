import classNames from "classnames";
import React from "react";

type Props = {
   textLabel: string;
   handleChange: (value: string) => void;
   value: string;
   [x: string]: any;
};

export const TextField = ({
   textLabel,
   handleChange,
   value,
   ...inputProps
}: Props) => {
   const [focused, setFocused] = React.useState(false);

   function toggleFocus() {
      if (focused && value !== "") return;
      setFocused((prevState) => !prevState);
   }

   return (
      <div className="relative">
         <label
            className={classNames(
               "absolute z-10 text-gray-500 pointer-events-none top-3 left-4 transition-all",
               { "-translate-y-1 text-xs": focused || value !== "" }
            )}
            htmlFor={inputProps.name}
         >
            {textLabel}
         </label>
         <input
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full h-full px-4 pt-6 pb-2 font-semibold text-black rounded outline-none"
            {...inputProps}
         />
      </div>
   );
};
