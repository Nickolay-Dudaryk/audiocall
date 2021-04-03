import React from 'react';
import StartGameBtn from './StartGameBtn';

const FinishScreen = ({
  startGame, userCorrectAnswers, userNotAnswer, userWrongAnswers
}) => (
  <>
    <p>правильно: {userCorrectAnswers.toString().split(',').join(', ')}</p>
    <p>нет ответа: {userNotAnswer.toString().split(',').join(', ')}</p>
    <p>ошибки: {userWrongAnswers.toString().split(',').join(', ')}</p>
    <StartGameBtn startGame={startGame} />
  </>
);


export default FinishScreen;
