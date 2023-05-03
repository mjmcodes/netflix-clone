import React from "react";

type Props = {
   textLabel: string;
   handleChange: (value: string) => void;
   value: string;
   [x: string]: any;
};

const TextField = ({
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
      <div className="relative bg-[#333] overflow-hidden rounded">
         <label
            className={`text-gray-400 pointer-events-none absolute left-4 top-[15px] transition-all ${
               focused || value !== "" ? "text-sm -translate-y-[12px]" : ""
            }`}
            htmlFor={inputProps.name}
         >
            {textLabel}
         </label>
         <input
            className="pt-6 pb-1 w-full outline-none px-4 text-white bg-transparent"
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            {...inputProps}
         />
      </div>
   );
};

export default TextField;
