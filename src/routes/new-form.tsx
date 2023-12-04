import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/form.css';

import { useDispatch } from 'react-redux';
import { setDataNewForm } from '../appSlice';
import { Link, useNavigate } from 'react-router-dom';

import IFormData from '../interfaces/form-data';

import { yupResolver } from '@hookform/resolvers/yup';
import schema from '../schemas/form';

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
    const dataSorted: IFormData = {
      name: data.name,
      age: data.age,
      email: data.email,
      gender: data.gender,
      isAccept: data.isAccept,
    };
    dispatch(setDataNewForm(dataSorted));
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
