import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/form.css';

import { useDispatch } from 'react-redux';
import { setData } from '../appSlice';
import { Link } from 'react-router-dom';

import IFormData from '../interfaces/form-data';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

// yup schema
const schema = yup.object().shape({
  name: yup.string().required('Name is a required field'),
});

export const Form: React.FC = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: IFormData) => {
    console.log(data);
    dispatch(setData(data));
  };

  return (
    <>
      <Link to={'/'}>Return to main page without saving</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register('name')} />
        {errors.name && <p>{errors.name.message}</p>}

        <input type="submit" />
      </form>
    </>
  );
};
