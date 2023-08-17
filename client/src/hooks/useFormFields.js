import  { useState } from "react";

const useFormFields = (initstate) => {
    const [input, setInput] = useState(initstate);
    
      const handleInput = (e) => {
        setInput((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };
  return {input,setInput,handleInput}
};

export default useFormFields;
