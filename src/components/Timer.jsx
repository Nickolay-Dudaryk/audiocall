const Timer = ({ timerCounter }) => (
  <div className="timer">
    {
    timerCounter === 0
      ? "Time over"
      : <span>Time: {timerCounter}</span>
    }
  </div>
);

export default Timer;
