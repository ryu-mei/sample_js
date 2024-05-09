/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import { sculptureList } from './data';

const imgSize = css`
  width: 200px;
  height: 200px;
`;

const Gallery = () => {
  const [index, setIndex] = useState(0);
  const handleClick = () => {
    setIndex(index + 1);
  };
  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleClick}>Next</button>
      <h1>
        {sculptureList.name} by {sculpture.artist}
      </h1>
      <p>
        {index + 1} of {sculptureList.length}
      </p>
      <img src={sculpture.url} alt={sculpture.alt} css={imgSize} />
      <p>{sculpture.description}</p>
    </>
  );
};

export default Gallery;
