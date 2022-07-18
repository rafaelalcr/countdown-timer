import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [initialHour, setInitialHour] = useState("");
  const [initialMinute, setInitialMinute] = useState("");
  const [initialSecond, setInitialSecond] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [second, setSecond] = useState("");
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    if(clicked) {
      setTimeout(() => {
        if (hour >= 0 && minute >= 0 && second > 0) {
          setSecond(second - 1);
        }
        if (hour >= 0 && minute > 0 && second === 0) {
          setMinute(minute - 1);
          setSecond(59);
        }
        if (hour > 0 && minute === 0 && second === 0) {
          setHour(hour - 1);
          setMinute(59);
          setSecond(59);
        }
      }, 1000);
    }
  }, [hour, minute, second, clicked]);

  const submitHandler = () => {
    if (initialHour >= 0 && initialMinute >= 0 && initialSecond > 0 && initialHour < 24 && initialMinute < 60 && initialSecond < 60) {
      setHour(initialHour);
      setMinute(initialMinute);
      setSecond(initialSecond);
    }
    setClicked(true);
  };

  const resetTimer = () => {
    setInitialHour("");
    setInitialMinute("");
    setInitialSecond("");
    setHour("");
    setMinute("");
    setSecond("");
    setClicked(false);
    clearTimeout();
  };

  return (
    <div>
      <header>
        <h1>Countdown Timer</h1>
      </header>
      <div className="select-time">
        <h3>Select a time:</h3>
        <input
          id="hour"
          type="number"
          min="0"
          max="23"
          placeholder="00"
          value={initialHour}
          onInput={(e) => setInitialHour(e.target.value)}
        />
        <input
          id="minute"
          type="number"
          min="0"
          max="59"
          placeholder="00"
          value={initialMinute}
          onInput={(e) => setInitialMinute(e.target.value)}
        />
        <input
          id="second"
          type="number"
          min="0"
          max="59"
          placeholder="00"
          value={initialSecond}
          onInput={(e) => setInitialSecond(e.target.value)}
        />
        <button className="submit" onClick={submitHandler}>
          Submit
        </button>
      </div>
      <div className="show-time">
        <h3>Show time:</h3>
        {hour >= 0 && minute >= 0 && second > 0 && clicked ? (
          <h3 className="time">{`${hour}:${minute}:${second}`}</h3>
        ) : (
          <h3 className="time">00:00:00</h3>
        )}
      </div>
      <button className="reset" onClick={resetTimer}>
        RESET
      </button>
    </div>
  );
}

export default App;
