import { useState } from "react";

function useForm(initialValue) {

  let [value, setValue] = useState(initialValue);

  let handleChange = (e) => {
    setValue(e.target.value);
  };

  return { 
    value, handleChange
};
}

export default useForm;