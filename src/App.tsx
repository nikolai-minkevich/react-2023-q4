import FormData from './components/form-data';

import './App.css';

import type { RootState } from './store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function App() {
  const data1 = useSelector((state: RootState) => state.app.data);

  return (
    <>
      <h1>Module 06</h1>
      <p>
        <Link to={`/old-form`}>
          form created using uncontrolled components approach
        </Link>
      </p>
      <p>
        <Link to={`/new-form`}>
          form created with the help of the React Hook Form
        </Link>
      </p>

      <h1>Data</h1>
      <div className="dataContainer">
        <div className="oldFormData">
          <h2>Old form</h2>
          <FormData data={data1} />
        </div>
        <div className="newFormData">
          <h2>New form</h2>
          <FormData data={data1} />
        </div>
      </div>
    </>
  );
}
