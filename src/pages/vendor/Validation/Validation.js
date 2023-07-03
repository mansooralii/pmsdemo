import * as Yup from 'yup'

export const ValidSchema = Yup.object({
  First_name: Yup.string().min(3).max(30).required('Please enter first Name*'),
  email: Yup.string().email().required('Please enter email*'),
  // password: Yup.string().min(8).required("Please enter password*"),
  Phone: Yup.string().required('Please enter phone number*'),
})
