import * as Yup from "yup";

const blogValidation = Yup.object().shape({
    title: Yup.string().min(3).max(20).required(),
    description: Yup.string().min(20).max(500).required(),
    src: Yup.string().url().required(),
    tagIds: Yup.array().required().default([]),
});

export default blogValidation;