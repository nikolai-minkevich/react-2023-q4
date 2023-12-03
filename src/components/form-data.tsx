import { FC } from 'react';
import IFormData from '../interfaces/form-data';

type TFormDataProps = {
  data: IFormData;
};

const FormData: FC<TFormDataProps> = ({ data }: TFormDataProps) => {
  return <>Form data {data.name}</>;
};

export default FormData;
