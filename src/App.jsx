import { collection, getDocs } from "firebase/firestore";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./App.css";
import CounterPage from "./components/counter/CounterPage";
import MarriedHeader from "./components/counter/MarriedHeader";
import TogetherHeader from "./components/counter/TogetherHeader";
import WeddingFooter from "./components/counter/WeddingFooter";
import Menu from "./components/menu/Menu";
import PercentPage from "./components/percent/PercentPage";
import { FORMATS, PAGES } from "./constants";
import { db } from "./firebaseConfig";

function App() {
  const [open, setOpen] = useState(PAGES.MARRIAGE_COUNTER);
  const [data, setData] = useState();

  const relationshipStart = () => new Date(data?.start);
  const weddingDate = () => new Date(data?.wedding);

  const now = () => new Date();

  const openCountdown = () => setOpen(PAGES.WEDDING_COUNTDOWN);
  const openMarriageCounter = () => setOpen(PAGES.MARRIAGE_COUNTER);
  const openCounter = () => setOpen(PAGES.RELATIONSHIP_COUNTER);
  const openPercent = () => setOpen(PAGES.PERCENT);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "relationship"));
      const dataList = querySnapshot.docs.map((doc) => doc.data())[0];
      setData(dataList);
    };

    fetchData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      <Menu
        openCountdown={openCountdown}
        openMarriageCounter={openMarriageCounter}
        openCounter={openCounter}
        openPercent={openPercent}
      />
      {open === PAGES.WEDDING_COUNTDOWN && (
        <CounterPage
          getDateFrom={now}
          getDateTo={weddingDate}
          footer={<WeddingFooter date={data?.wedding} />}
          defaultFormat={FORMATS.DAYS}
          increment={false}
        />
      )}
      {open === PAGES.MARRIAGE_COUNTER && (
        <CounterPage
          getDateFrom={weddingDate}
          getDateTo={now}
          header={<MarriedHeader />}
          defaultFormat={FORMATS.DAYS}
        />
      )}
      {open === PAGES.RELATIONSHIP_COUNTER && (
        <CounterPage
          getDateFrom={relationshipStart}
          getDateTo={now}
          header={<TogetherHeader />}
        />
      )}
      {open === PAGES.PERCENT && (
        <PercentPage
          getDateFrom={relationshipStart}
          getDateTo={now}
          persons={data?.persons}
        />
      )}
    </motion.div>
  );
}

export default App;
