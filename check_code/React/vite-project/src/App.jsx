/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { createConnection } from './chat';
import Button from '@mui/material/Button';

const Playground = () => {
  const [text, setText] = useState('a');
  useEffect(() => {
    const onTimeout = () => {
      console.log('⏰' + text);
    };
    console.log(`🔵 Schedule ${text} log`);
    const timeoutId = setTimeout(onTimeout, 3000);
    return () => {
      console.log(`🟡 Cancel ${text} log`);
      clearTimeout(timeoutId);
    };
  }, [text]);
  return (
    <>
      <label>
        What to log:{' '}
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <h1>{text}</h1>
    </>
  );
};

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setShow(!show)}>
        {show ? 'Unmount' : 'Mount'} the component
      </Button>
      {show && <hr />}
      {show && <Playground />}
    </>
  );
};

export default App;
