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
});

export const Form: React.FC = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log(data);
    dispatch(setDataNewForm(data));
    navigate('/');
  };

  return (
    <>
      <Link to={'/'}>Return to main page without saving</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>
        <input id="name" {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="submit" />
      </form>
    </>
  );
};
