import CounterContainer from "./CounterContainer";
import CounterHeader from "./CounterHeader";

const CounterPage = ({ getDateFrom, getDateTo }) => {
  return (
    <div className="counter-page">
      <CounterHeader />
      <CounterContainer getDateFrom={getDateFrom} getDateTo={getDateTo} />
    </div>
  );
};

export default CounterPage;
