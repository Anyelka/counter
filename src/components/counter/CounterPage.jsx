import { FORMATS } from "../../constants";
import CounterContainer from "./CounterContainer";

const CounterPage = ({
  getDateFrom,
  getDateTo,
  header = <></>,
  footer = <></>,
  defaultFormat = FORMATS.YEARS,
  increment = true,
}) => {
  return (
    <div className="counter-page">
      {header}
      <CounterContainer
        getDateFrom={getDateFrom}
        getDateTo={getDateTo}
        defaultFormat={defaultFormat}
        increment={increment}
      />
      {footer}
    </div>
  );
};

export default CounterPage;
