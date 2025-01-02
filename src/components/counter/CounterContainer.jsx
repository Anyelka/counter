import { useState } from "react";
import { FORMATS } from "../../constants";
import Counter from "./Counter";

const CounterContainer = ({ getDateFrom, getDateTo }) => {
  const [format, setFormat] = useState(FORMATS.YEARS);

  const changeFormat = () => {
    const formats = Object.values(FORMATS);
    const nextFormat = formats[(formats.indexOf(format) + 1) % formats.length];
    setFormat(nextFormat);
  };

  return (
    <div className="counter-container">
      {Object.values(FORMATS).map((fmt) => (
        <Counter
          getDateFrom={getDateFrom}
          getDateTo={getDateTo}
          format={fmt}
          onClick={changeFormat}
          show={fmt === format}
        />
      ))}
    </div>
  );
};

export default CounterContainer;
