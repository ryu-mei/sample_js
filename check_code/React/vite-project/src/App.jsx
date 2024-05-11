/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({
    firstname: 'barbara',
    lastname: 'hepworth',
    email: 'bhepworth@gmail.com',
  });

  const handleFirstNameChange = (e) => {
    setPerson({ ...person, firstname: e.target.value });
  };

  const handleLastNameChange = (e) => {
    setPerson({ ...person, lastname: e.target.value });
  };

  const handleEmailChange = (e) => {
    setPerson({ ...person, email: e.target.value });
  };

  return (
    <>
      <label>
        firstname:
        <input value={person.firstname} onChange={handleFirstNameChange} />
      </label>
      <label>
        lastname:
        <input value={person.lastname} onChange={handleLastNameChange} />
      </label>
      <label>
        email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>{`${person.firstname} ${person.lastname} ${person.email}`}</p>
    </>
  );
};

export default Form;
