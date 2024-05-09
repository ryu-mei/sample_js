const Button = () => {
  const handleClick = () => {
    alert('クリックされました');
  };
  return <button onClick={handleClick}>ボタン</button>;
};

export default Button;
