import React from 'react'

const StartGameBtn = ({ startGame }) => {
  return (
    <button onClick={() => startGame()}>Начать игру</button>
  )
}

export default StartGameBtn
