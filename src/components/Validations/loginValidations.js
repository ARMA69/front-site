import * as yup from "yup";

export const SCHEMA = yup.object({
  login: yup.string().min(4).max(30).required("Not null"),
  password: yup
    .string()
    .required()
    .min(6, "Pass is not valid! must be at least 6 characters"),
});
