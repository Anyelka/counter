import { useState } from "react";
import { FORMATS } from "../../constants";
import Counter from "./Counter";

const CounterContainer = ({
  getDateFrom,
  getDateTo,
  defaultFormat,
  increment,
}) => {
  const [format, setFormat] = useState(defaultFormat);

  const changeFormat = () => {
    const formats = Object.values(FORMATS);
    const nextFormat = formats[(formats.indexOf(format) + 1) % formats.length];
    setFormat(nextFormat);
  };

  return (
    <div className="counter-body">
      {Object.values(FORMATS).map((fmt) => (
        <Counter
          getDateFrom={getDateFrom}
          getDateTo={getDateTo}
          format={fmt}
          onClick={changeFormat}
          show={fmt === format}
          increment={increment}
        />
      ))}
    </div>
  );
};

export default CounterContainer;
