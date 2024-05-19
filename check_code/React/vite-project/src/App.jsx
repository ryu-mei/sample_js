/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRef } from 'react';

const displayflex = css`
  display: flex;
  list-style: none;
`;

const CatFriends = () => {
  const firstCatRef = useRef(null);
  const secondCatRef = useRef(null);
  const thirdCatRef = useRef(null);

  function handleScrollToFirstCat() {
    firstCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button onClick={handleScrollToFirstCat}>猫ちゃん</button>
        <button onClick={handleScrollToSecondCat}>猫ちゃん</button>
        <button onClick={handleScrollToThirdCat}>猫ちゃん</button>
      </nav>
      <div>
        <ul css={displayflex}>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="猫ちゃん"
              ref={firstCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="猫ちゃん"
              ref={secondCatRef}
            />
          </li>
          <li>
            <img
              src="https://placekitten.com/g/200/200"
              alt="猫ちゃん"
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default CatFriends;
