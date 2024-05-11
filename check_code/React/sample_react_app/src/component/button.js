import React , { useState }from "react";
import style from "../styles/button.module.css";

const LikeButton = () => {
    const [count, setCount ] = useState(0);
    let hasPrev = count > 0;
    const handlePlusClick = () => {
        setCount(count + 1);
    };
    const handleMinusClick = () => {
        if (hasPrev) {
            setCount(count -1);
        }
    }
    return (
        <div>
            <span className={style.likeButton} >{count}</span>
            <span className={style.plusButton} onClick={handlePlusClick}>プラス</span>
            <span className={style.minusButton} onClick={handleMinusClick} >マイナス</span>
        </div>
    )
}

export default LikeButton;