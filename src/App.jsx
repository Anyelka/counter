import { collection, getDocs } from "firebase/firestore";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "./App.css";
import CounterPage from "./components/counter/CounterPage";
import Menu from "./components/menu/Menu";
import PercentPage from "./components/percent/PercentPage";
import { PAGES } from "./constants";
import { db } from "./firebaseConfig";

function App() {
  const [open, setOpen] = useState(PAGES.COUNTER);
  const [data, setData] = useState();

  const relationshipStart = () => new Date(data?.start);

  const now = () => new Date();

  const openCounter = () => setOpen(PAGES.COUNTER);
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
      <Menu openCounter={openCounter} openPercent={openPercent} />

      {open === PAGES.COUNTER && (
        <CounterPage getDateFrom={relationshipStart} getDateTo={now} />
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
