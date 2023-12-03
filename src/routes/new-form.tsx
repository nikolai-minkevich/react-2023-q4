import React from 'react';
import { useForm } from 'react-hook-form';

import '../styles/form.css';

import type { RootState } from '../store';
import { useSelector, useDispatch } from 'react-redux';
import { setName } from '../appSlice';

interface IFormInput {
  name: string;
}

export const Form: React.FC = () => {
  const name1 = useSelector((state: RootState) => state.app.name);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm<IFormInput>();

  const onSubmit = (data: IFormInput) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name {name1}</label>
      <input
        {...register('name')}
        onChange={(e) => dispatch(setName(e.target.value))}
      />

      <input type="submit" />
    </form>
  );
};
