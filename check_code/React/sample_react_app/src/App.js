import { useState } from 'react';

const App = () => {
    const [position, setPosition] = useState('');
    const [battingOrder, setBattingOrder] = useState('');

    const handlePositionChange = (e) => {
        setPosition(e.target.value);
    };

    const handleBattingOrder = (e) => {
        setBattingOrder(e.target.value);
    };

    return (
        <>
            <p>今日のあなたのポジションと打順を入力してください</p>
            <label>
                ポジション
                <input value={position} onChange={handlePositionChange} />
            </label>

            <br />
            <label>
                打順
                <input value={battingOrder} onChange={handleBattingOrder} />
            </label>
            <h3>
                今日のあなたのポジションは{position}で打順は{battingOrder}
                番ですね！
            </h3>
        </>
    );
};

export default App;
