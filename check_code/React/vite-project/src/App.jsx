/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';

const Form = () => {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default Form;
