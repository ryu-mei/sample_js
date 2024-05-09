/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
const red = css`
  color: red;
`;
const bgBlue = css`
  background: #2196f3;
`;

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const Toolbar = () => {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert('you clicked on the toolbar!');
      }}
      css={bgBlue}
    >
      <Button onClick={() => alert('playing')} css={red}>
        play movie
      </Button>
      <Button onClick={() => alert('uploading')}>upload image</Button>
    </div>
  );
};

export default Toolbar;
