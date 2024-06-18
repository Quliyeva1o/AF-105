import * as Yup from "yup";

const userValidation = Yup.object().shape({
  username: Yup.string().min(2).required(),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/, "password regex failed")
    .required(),
  repeat_password: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
  src: Yup.mixed()
    .test({
      message: `File too big, can't exceed ${5_000_000}`,
      test: (file) => {
        const isValid = file?.size < 5_000_000;
        return isValid;
      },
    })
    .test({
      message: "Please provide a supported file type",
      test: (file, context) => {
        console.log('file',file);
        const isValid = file?.type.includes("image/");
        console.log("is valid: ", isValid);
        if (!isValid) context?.createError();   
        return isValid;
      },
    }),
  role: Yup.string().oneOf(["client", "journalist"]).required(),
  email: Yup.string().email().required(),
});

export default userValidation;
