import React from 'react';

const AudioPlayer = ({ audioFile }) => {

  const audioPlay = (audioFile) => {
    const audio = new Audio(
      `https://raw.githubusercontent.com/Nickolay-Dudaryk/rslang-data/master/files/${audioFile}`
    );
    audio.play();
  };
  
  return (
    <button onClick={() => audioPlay(audioFile)}>Play</button>
  );
};

export default AudioPlayer;
