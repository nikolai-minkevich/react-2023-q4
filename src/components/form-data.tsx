import { FC } from 'react';
import IFormData from '../interfaces/form-data';

type TFormDataProps = {
  data: IFormData;
};

const FormData: FC<TFormDataProps> = ({ data }: TFormDataProps) => {
  if (!data.name) {
    return <span>No form data provided yet</span>;
  }
  return (
    <>
      {Object.entries(data).map(([key, value], index) => {
        console.log(key, value);
        if (typeof value === 'boolean') {
          value = value ? '✅' : '❌';
        }

        return (
          <div key={index}>
            {key}: {value}
          </div>
        );
      })}
    </>
  );
};

export default FormData;
