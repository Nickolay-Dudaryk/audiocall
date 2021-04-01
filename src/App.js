import React from 'react';
// components
import AudioPlayer from './components/AudioPlayer';
import ChoiseButtons from './components/ChoiseButtons';
import Timer from './components/Timer';
// custom functions
import { fillAnArray, findCorrectAnswer } from './utils';
// hardcode db
import  book1 from './hardcodeDb';

const App = () => {
  const [audioFile, setAudioFile] = React.useState('');
  const [userAnswerOptions, setUserAnswerOptions] = React.useState([]);
  const [lengthOfAnswerOptions] = React.useState(5);
  const [correctAnswer, setCorrectAnswer] = React.useState('');
  const [timerCounter, setTimerCounter] = React.useState(5);

  const play = () => {
    // const randomObj = findCorrectAnswer(book1);
    // setCorrectAnswer(randomObj.wordTranslate);
    // setAudioFile(randomObj.audio);

    // const a = [];
    // const b = fillAnArray(book1, lengthOfAnswerOptions)
    // a.push(correctAnswer)
    // a.push(b);
    // setUserAnswerOptions(a)
  }

  // play();

  console.log(audioFile);
  // console.log(userAnswerOptions);
  console.log(correctAnswer);

  React.useEffect(() => {
    let timer;
    
    if (timerCounter > 0) {
      timer = setTimeout(() => setTimerCounter(c => c - 1), 1000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timerCounter]);

  return (
    <>
      <AudioPlayer audioFile={'01_0001.mp3'} />
      <Timer timerCounter={timerCounter} />
      <ChoiseButtons />
    </>
  )
}

export default App;
