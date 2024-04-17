import { useState } from 'react';

const App = () => {
    const [playPosition, setPlayPosition] = useState('ピッチャー');

    function handlePositionChange(e) {
        setPlayPosition(e.target.value);
    }
    // console.log(playPosition);
    return (
        <>
            <p>今日のあなたのポジションと打順を選択してください</p>
            <select value={playPosition} onChange={handlePositionChange}>
                <option value="ピッチャー">ピッチャー</option>
                <option value="ライト">ライト</option>
                <option value="レフト">レフト</option>
            </select>
            <h3>今日のあなたのポジションは{playPosition}ですね！</h3>
        </>
    );
};

export default App;
