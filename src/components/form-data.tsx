import { FC } from 'react';
import IFormData from '../interfaces/form-data';

type TFormDataProps = {
  data: IFormData;
};

const FormData: FC<TFormDataProps> = ({ data }: TFormDataProps) => {
  return (
    <>
      {Object.entries(data).map(([key, value], index) => (
        <p key={index}>
          {key}: {value}
        </p>
      ))}
    </>
  );
};

export default FormData;
