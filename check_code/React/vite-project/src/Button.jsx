import { useState } from 'react';

const Button = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <p>{count}</p>
      <button onClick={handleClick}>ボタン</button>
    </>
  );
};

export default Button;
