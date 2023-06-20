import { FC, useState } from "react";
import "./styles.css";

const Counter: FC = () => {
  const [counter, setCounter] = useState<number>(0);
  const [counterInterval, setCounterInterval] = useState<number | null>(null);

  const handleCounterClick = (): void => {
    if (counterInterval === null) {
      const newInterval = window.setInterval(() => {
        setCounter((prev) => prev + 1);
      }, 1000);
      setCounterInterval(newInterval);
      return;
    }

    if (counterInterval) {
      clearInterval(counterInterval);
      setCounterInterval(null);
    }
  };

  const handleResetClick = (): void => {
    if (counterInterval) {
      clearInterval(counterInterval);
    }
    setCounterInterval(null);
    setCounter(0);
  };

  return (
    <div className="container">
      <span>{counter}</span>
      <div className="btn-container">
        <button className="btn primary" onClick={handleCounterClick}>
          {counter === 0 && counterInterval === null
            ? "Start"
            : !counterInterval
            ? "Resume"
            : "Pause"}
        </button>
        <button
          className="btn reset"
          onClick={handleResetClick}
          disabled={!counter}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
