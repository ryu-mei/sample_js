import { useState } from 'react';

const App = () => {
    const [value, setValue] = useState(0);
    const clickHandler = () => {
        setValue(value + 1);
        // console.log(value);
    };
    return (
        <>
            <p>{value}</p>
            <button onClick={clickHandler}>ボタン</button>
        </>
    );
};

export default App;
