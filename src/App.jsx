import { useState } from "react";
import "./App.css";
import CounterPage from "./components/counter/CounterPage";
import Menu from "./components/menu/Menu";
import PercentPage from "./components/percent/PercentPage";
import { DATA } from "./constants";

const counterAnimation = {
  transition: { duration: 0.25 },
};

const PAGES = {
  COUNTER: "COUNTER",
  PERCENT: "PERCENT",
};

function App() {
  const [open, setOpen] = useState(PAGES.COUNTER);
  const [data, setData] = useState(DATA.US);

  const relationshipStart = () => new Date(data.relationshipStart);

  const now = () => new Date();

  const openCounter = () => setOpen(PAGES.COUNTER);
  const openPercent = () => setOpen(PAGES.PERCENT);

  return (
    <>
      <Menu openCounter={openCounter} openPercent={openPercent} />
      {open === PAGES.COUNTER && (
        <CounterPage getDateFrom={relationshipStart} getDateTo={now} />
      )}
      {open === PAGES.PERCENT && (
        <PercentPage
          getDateFrom={relationshipStart}
          getDateTo={now}
          persons={data.persons}
        />
      )}
    </>
  );
}

export default App;
