/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef } from 'react';

const Counter = () => {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from the Dom
      </button>
      {show && <p ref={ref}>Hello world</p>}
    </div>
  );
};

export default Counter;
