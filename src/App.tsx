import FormData from './components/form-data';

import './App.css';

import type { RootState } from './store';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function App() {
  const dataNewForm = useSelector((state: RootState) => state.app.dataNewForm);
  const dataOldForm = useSelector((state: RootState) => state.app.dataOldForm);

  return (
    <>
      <h1>Module 06</h1>

      <div className="dataContainer">
        <div>
          <h2>Old form</h2>
          <div className="form-data">
            <FormData data={dataOldForm} />
          </div>
          <div className="link">
            <Link to={`/old-form`}>Fill the old uncontrolled form</Link>
          </div>
        </div>
        <div>
          <h2>New form</h2>
          <div className="form-data">
            <FormData data={dataNewForm} />
          </div>
          <div className="link">
            <Link to={`/new-form`}>
              Fill the new form used `react-hook-form`
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
