/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const Form = () => {
  const [person, setPerson] = useState({
    name: 'Niki de Saint Phalle',
    artwork: {
      title: 'Blue Nana',
      city: 'Hanburg',
      image: 'https://i.imgur.com/Sd1AgUOm.jpg',
    },
    email: 'bhepworth@gmail.com',
  });

  const handleNameChange = (e) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleTitleChange = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, title: e.target.value },
    });
  };

  const handleCityChange = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  };

  const handleImageChange = (e) => {
    setPerson({
      ...person,
      artwork: { ...person.artwork, city: e.target.value },
    });
  };

  return (
    <>
      <label>
        name:
        <input value={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Title:
        <input value={person.artwork.title} onChange={handleTitleChange} />
      </label>
      <label>
        City:
        <input value={person.artwork.city} onChange={handleCityChange} />
      </label>
      <label>
        Image:
        <input value={person.artwork.image} onChange={handleImageChange} />
      </label>
      <p>
        <i>{person.artwork.title}</i>
        {'by'}
        {person.name}
        <br />
        (located in {person.artwork.city})
        <img src={person.artwork.image} alt={person.artwork.title} />
      </p>
    </>
  );
};

export default Form;
