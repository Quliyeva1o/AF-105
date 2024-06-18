import { useState } from "react";

const useToggle = function (defaultValue=false) {
  const [value, setValue] = useState(defaultValue);

  function change(toggle){
    if (typeof toggle === 'boolean') {
        setValue(toggle);
    }
    else{
        setValue(!value);
    }
  }
    
  return [value, change];
};

export default useToggle;
