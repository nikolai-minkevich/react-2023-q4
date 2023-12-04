import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setDataOldForm } from '../appSlice';
import { Link, useNavigate } from 'react-router-dom';
import IFormData from '../interfaces/form-data';
// import schema from "../schemas/form";

export default function OldForm() {
  const nameRef = useRef(null),
    ageRef = useRef(null),
    genderRef = useRef(null),
    emailRef = useRef(null),
    isAcceptRef = useRef(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const errors = {};

  function handleSubmit() {
    const data: IFormData = {
      name: nameRef.current.value,
      age: ageRef.current.value,
      gender: genderRef.current.value,
      email: emailRef.current.value,
      isAccept: isAcceptRef.current.value,
    };
    dispatch(setDataOldForm(data));
    navigate('/');
  }

  return (
    <>
      <h3>Uncontrolled Component Form</h3>

      <form onSubmit={handleSubmit} method="post">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={nameRef} />
        {errors.name && <p>{errors.name.message}</p>}

        <label htmlFor="age">Age</label>
        <input type="text" id="age" ref={ageRef} />
        {errors.age && <p>{errors.age.message}</p>}

        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailRef} />
        {errors.email && <p>{errors.email.message}</p>}

        <label htmlFor="gender">Gender</label>
        <select id="gender" ref={genderRef}>
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
        {errors.gender && <p>{errors.gender.message}</p>}

        <label htmlFor="isAccept">Accept Terms & Conditions</label>
        <input id="isAccept" type="checkbox" ref={isAcceptRef} />
        {errors.isAccept && <p>{errors.isAccept.message}</p>}

        <input type="submit" />
      </form>

      <Link to={'/'}>Return to main page without saving</Link>
    </>
  );
}
