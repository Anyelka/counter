import { useEffect, useState } from "react";
import { withEveryThirdDigitSeparated } from "../../utils";

const SecondCounter = ({ secs, increment }) => {
  const [seconds, setSeconds] = useState(secs);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (increment) return prevSeconds + 1;
        else return prevSeconds - 1;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return withEveryThirdDigitSeparated(seconds);
};

export default SecondCounter;
