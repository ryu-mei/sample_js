import { useState } from "react";

export default function Main() {
    const [isOn, setIsOn] = useState(false);
    const toggleSwich = () => {
      setIsOn(!isOn);
    }
    return (
      <>
        <h1>{isOn ? "on" : "off"}</h1>
        <button onClick={toggleSwich}>クリック</button>
      </>
    )
}