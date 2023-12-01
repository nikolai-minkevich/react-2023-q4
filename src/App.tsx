import FormData from './components/form-data';
import './App.css';

export default function App() {
  return (
    <>
      <h1>Module 06</h1>
      <p>
        <a href={`/old-form`}>
          form created using uncontrolled components approach
        </a>
      </p>
      <p>
        <a href={`/new-form`}>
          form created with the help of the React Hook Form
        </a>
      </p>

      <h1>Data</h1>
      <div className="dataContainer">
        <div className="oldFormData">
          <h2>Old form</h2>
          <FormData />
        </div>
        <div className="newFormData">
          <h2>New form</h2>
          <FormData />
        </div>
      </div>
    </>
  );
}
