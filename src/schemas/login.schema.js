import { string } from "yup";
import { object } from "yup";

const loginSchema = object().shape({
    firstName: string()
        .trim()
        .required()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    lastName: string()
        .trim()
        .required()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
    email: string()
        .trim()
        .email()
        .min(2, 'This field must be at least 2 characters long.')
        .max(30, 'This field must be at most 30 characters long.')
        .required('This field must not be empty'),
    password: string()
        .required('This field must not be empty'),
    dateOfBirth: string() 
        .required('This field must not be empty'),

});

export default loginSchema;