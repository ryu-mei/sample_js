<<<<<<< HEAD
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
=======
import LikeButton from "./button";

export default function Main() {
    return (
      <header className="App-header">
        <LikeButton />
      </header>
    );
>>>>>>> 53c94dd5c30692dd6afe5ce3df832e6d8cfef31b
}