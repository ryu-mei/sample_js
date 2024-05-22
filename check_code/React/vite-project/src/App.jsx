/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState, useRef, useEffect } from 'react';

const videoStyle = css`
  width: 200px;
  height: 150px;
`;

const videoPlayerStyle = css`
  width: 300px;
`;

const VideoPlayer = ({ src, isPlaying, css }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (isPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying]);
  console.log(css);
  return (
    <video
      ref={ref}
      src={src}
      css={{ ...videoStyle, ...css }}
      loop
      playsInline
    />
  );
};

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'pause' : 'play'}
      </button>
      <VideoPlayer
        isPlaying={isPlaying}
        css={videoPlayerStyle}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
};

export default App;
