import * as Yup from "yup";

export const ValidSchema = Yup.object({
  firstname: Yup.string().min(3).max(30).required("Please enter first Name*"),
  email: Yup.string().email().required("Please enter email*"),
  password: Yup.string().min(8).required("Please enter password*"),
  mobile_no: Yup.string().required("Please enter phone number*"),
});
