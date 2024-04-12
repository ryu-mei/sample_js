import { useState } from 'react';

const App = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const pointerMove = (e) => {
        // console.log(e.clientX);
        setPosition({
            x: e.clientX,
            y: e.clientY,
        });
    };
    return (
        <div
            onPointerMove={pointerMove}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    backgroundColor: 'red',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px,${position.y}px)`,
                    left: -10,
                    top: -10,
                    width: 20,
                    height: 20,
                }}
            ></div>
        </div>
    );
};

export default App;
