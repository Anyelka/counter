import { useEffect, useState } from "react";
import { withEveryThirdDigitSeparated } from "../../utils";

const SecondCounter = ({ secs }) => {
  const [seconds, setSeconds] = useState(secs);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return withEveryThirdDigitSeparated(seconds);
};

export default SecondCounter;
