import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/form.css';

import { useDispatch } from 'react-redux';
import { setDataNewForm } from '../appSlice';
import { Link, useNavigate } from 'react-router-dom';

import IFormData from '../interfaces/form-data';

import { yupResolver } from '@hookform/resolvers/yup';
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

export const Form: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ mode: 'onBlur', resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log(data);
    dispatch(setDataNewForm(data));
    navigate('/');
  };

  return (
    <>
      <h2>React hook form</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="age">Age</label>
        <input id="age" {...register('age')} />
        {errors.age && <p>{errors.age.message}</p>}

        <label htmlFor="email">Email</label>
        <input id="email" {...register('email')} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register('gender')}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>

        <label htmlFor="isAccept">Accept Terms & Conditions</label>
        <input id="isAccept" type="checkbox" {...register('isAccept')} />
        {errors.isAccept && <p>{errors.isAccept.message}</p>}

        <input type="submit" />
      </form>

      <Link to={'/'}>Return to main page without saving</Link>
    </>
  );
};
