import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(10);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset(bool) {
    setSeconds(10);
    setIsActive(bool);
  }

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds - 1);
        if (seconds == -5) {
            reset(true)
        }
      }, 1000);

    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div className="app col-md-4 center">
        <h1>Count Down Timer</h1>
    <div className="time">
      {seconds > 0 && seconds <= 9 ? '0' + seconds : seconds <= 0 ? '00' : seconds}s
    </div>
    <div className="row">
        <div className = "col-md-6">
            <button className={`btn btn-blue btn-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
                {isActive ? 'Pause' : 'Start'}
            </button>
      </div>
      <div className = "col-md-6">
        <button className="btn btn-dark" onClick={()=> reset(false)}>
            Reset
        </button>
      </div>
    </div>
  </div>
);
};

export default Timer;