import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000); // update every 1 minute

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <>
      <p className="clock">
        {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
      </p>
    </>
  );
};
