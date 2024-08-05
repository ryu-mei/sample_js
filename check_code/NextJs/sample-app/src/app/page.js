'use client';
import React, { useEffect, useState } from "react";


export default function Home() {
  const [count, setCount] = useState(0);
  const fruits = [`apple`, `orange`, `banana`];

  const clickhandler = () => {
    setCount(count + 1);
  }

  useEffect(() => {
    console.count(`副作用`);
  }, [count]);
  console.count(`レンダリング`);

  return (
    <>
      <button onClick={clickhandler}>{count}</button>
      <ul>
        {fruits.map(f => { return (<li key={f}>{f}</li>) })}
      </ul>
    </>
  );
}
