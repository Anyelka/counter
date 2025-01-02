import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import { FORMATS } from "./constants";

const CounterContainer = ({ dateFrom, dateTo }) => {
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
          dateFrom={dateFrom}
          dateTo={dateTo}
          format={fmt}
          onClick={changeFormat}
          show={fmt === format}
        />
      ))}
    </div>
  );
};

export default CounterContainer;
