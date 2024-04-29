import { useRef } from 'react';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  let ref = useRef(0);

  function handleRefClick() {
    ref.current = ref.current + 1;
    console.log(ref.current);
  }
  function handleStateClick() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      {/* レンダリングされない */}
      <button onClick={handleRefClick}>useRef</button>
      {/* レンダリングされる */}
      <button onClick={handleStateClick}>useState</button>
    </>
  );
};

export default App;
