import * as yup from "yup"; // for everything

export default yup.object().shape({
  title: yup
    .string()
    .min(4)
    .required(),
  description: yup
    .string()
    .min(10)
    .required(),
  thumbnail: yup
    .mixed()
    .required("Thumbnail is required")
    .test(value => value.type && value.name),
  images: yup
    .array()
    .of(yup.mixed().test(value => value.type && value.name))
    .required(),
  tags: yup
    .array()
    .of(yup.string())
    .required(),
  category: yup.string().required()
});
