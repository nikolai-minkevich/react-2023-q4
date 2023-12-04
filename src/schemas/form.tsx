import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Name is a required field')
    .matches(/^[A-Z]{1}[a-z]{0,}$/, 'Use capitalized name'),
  age: yup.number().required('Age is a required field').min(0),
  email: yup
    .string()
    .required('Email is a required field')
    .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Not valid email'),
  gender: yup.string().required('gender is a required field'),
  isAccept: yup
    .boolean()
    .oneOf([true], 'acception is a required field')
    .required(),
});

export default schema;
