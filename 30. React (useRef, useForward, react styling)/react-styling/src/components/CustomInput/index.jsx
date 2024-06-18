import { forwardRef } from "react";

const CustomInput = forwardRef(function CustomInput({ inputRef }) {
  console.log("props: ", inputRef);
  return <input ref={inputRef} type="text" placeholder="search" />;
});

export default CustomInput;
