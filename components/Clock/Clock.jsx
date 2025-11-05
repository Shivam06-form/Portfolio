import { useEffect, useState } from "react";
import "./Clock.css";

const Clock = () => {
  // const width = window.screen.width;

  const [time, setTime] = useState({ Seconds: 0, Minutes: 0, Hours: 0 });

  useEffect(() => {
    setInterval(() => {
      const DATE = new Date();
      setTime({
        ...time,
        Seconds: DATE.getSeconds() * 6,
        Minutes: DATE.getMinutes() * 6,
        Hours: DATE.getHours() * 30 + DATE.getMinutes() * 0.5,
      });
    }, 1000);
  }, [time]);

  const ClockLabel = (time) => {
    return { transform: `rotateZ(${time}deg)` };
  };

  return (
    <div className="clock">
      <div className="Wallclock" style={{ padding: `${10}px` }}>
        <div className="clockNumbers">
          <div>12</div>
          <div>6</div>
        </div>
        <div className="clockNumbers2">
          <div>9</div>
          <div>3</div>
        </div>
        <div className="clockNumbers2" style={{ transform: "rotateZ(30deg)" }}>
          <div style={ClockLabel(-29)}>10</div>
          <div style={ClockLabel(-30)}>4</div>
        </div>
        <div className="clockNumbers2" style={{ transform: "rotateZ(-30deg)" }}>
          <div style={ClockLabel(30)}>8</div>
          <div style={ClockLabel(30)}>2</div>
        </div>
        <div className="clockNumbers2" style={{ transform: "rotateZ(-60deg)" }}>
          <div style={ClockLabel(60)}>7</div>
          <div style={ClockLabel(60)}>1</div>
        </div>
        <div className="clockNumbers2" style={{ transform: "rotateZ(60deg)" }}>
          <div style={ClockLabel(-60)}>11</div>
          <div style={ClockLabel(-60)}>5</div>
        </div>
        <div
          className="HourHand"
          style={{ transform: `rotateZ(${time.Hours}deg)` }}
        >
          <div></div>
        </div>
        <div
          className="MinuteHand"
          style={{ transform: `rotateZ(${time.Minutes}deg)` }}
        >
          <div></div>
        </div>
        <div
          className="SecondHand"
          style={{ transform: `rotateZ(${time.Seconds}deg)` }}
        >
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
