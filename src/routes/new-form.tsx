import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/form.css';

import { useDispatch } from 'react-redux';
import { setData } from '../appSlice';
import { Link } from 'react-router-dom';

interface IFormInput {
  name: string;
}

export const Form: React.FC = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
    dispatch(setData(data));
  };

  return (
    <>
      <Link to={'/'}>Return to main page without saving</Link>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input {...register('name')} />

        <input type="submit" />
      </form>
    </>
  );
};
