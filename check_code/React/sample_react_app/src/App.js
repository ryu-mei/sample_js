import { useState } from 'react';

const App = () => {
    const [showB, setShowB] = useState(false);
    return (
        <>
            <div className="wrapper">
                <Counter />
                {showB && <Counter />}
            </div>
            <label>
                <input
                    type="checkbox"
                    checked={showB}
                    onChange={(e) => setShowB(e.target.checked)}
                />
                2個目のボックスを追加
            </label>
        </>
    );
};

export default App;

function Counter() {
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
    let className = 'counter';
    if (hover) {
        className = 'hover';
    }
    return (
        <div
            className={`${className} box`}
            onPointerEnter={() => setHover(true)}
            onPointerLeave={() => setHover(false)}
        >
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)}>追加</button>
        </div>
    );
}
