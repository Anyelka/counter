import CounterContainer from "./CounterContainer";
import CounterHeader from "./CounterHeader";

const CounterPage = ({ getDateFrom, getDateTo }) => {
  return (
    <div className="container">
      <CounterHeader />
      <CounterContainer getDateFrom={getDateFrom} getDateTo={getDateTo} />
    </div>
  );
};

export default CounterPage;
