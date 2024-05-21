/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';

const videoStyle = css`
  width: 200px;
  height: 250px;
`;

const VideoPlayer = ({ src, isPlaying, css }) => {
  const ref = useRef(null);
  useEffect(() => {
    console.count('useEffect');
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  console.count('レンダリング');
  return (
    <video ref={ref} src={src} css={{ ...videoStyle, css }} loop playsInline />
  );
};

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [text, setText] = useState('');

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <br />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
};

export default App;
