import { useEffect, useState } from "react";

function EventCountDown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date("2024-07-30") - +new Date();

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponent = Object.entries(timeLeft).map(([interval, value]) => {
    if (!value) {
      return null;
    }

    return (
      <span className="text-base md:text-[25px] text-[#475eda] font-semibold" key={interval}>
        {value} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponent.length ? (
        timerComponent
      ) : (
        <span className="text-red-600 text-lg font-semibold">Times Up</span>
      )}
    </div>
  );
}

export default EventCountDown;
