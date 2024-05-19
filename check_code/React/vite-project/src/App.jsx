/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});

const Form = () => {
  const inputRef = useRef(null);
  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
};

export default Form;
