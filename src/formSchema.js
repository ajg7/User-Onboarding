import * as yup from "yup"

const formSchema = yup.object().shape({
    name: yup
        .string()
        .required('Name is Required'),
    email: yup
        .string()
        .email('Must be a valid email address')
        .required('Must include email address'),
    password: yup
        .string()
        .min(7, 'Password must be at least 7 characters long')
        .required('Password is Required'),
    position: yup
        .string()
        .oneOf(['Team Leader', 'Frontend Engineer', 'Backend Engineer', 'UI/UX Designer'], 'You must select a position')
        .required('You must select a role'),
    title: yup
        .string()
        .required("Must select one"),
    termsOfService: yup
        .boolean()
        .required("Must check")
})

export default formSchema;