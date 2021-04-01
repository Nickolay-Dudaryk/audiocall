import React from 'react';
import StartGameBtn from './StartGameBtn';

const FinishScreen = ({ startGame, userCorrectAnswers, userNotAnswer, userWrongAnswers }) => {
  return (
    <div>
      <div>правильно: {userCorrectAnswers.toString()}</div>
      <div>нет ответа: {userNotAnswer.toString()}</div>
      <div>ошибки: {userWrongAnswers.toString()}</div>
      <StartGameBtn startGame={startGame} />
    </div>
  )
}

export default FinishScreen
