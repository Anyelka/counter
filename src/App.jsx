import { useState } from "react";
import "./App.css";
import CounterPage from "./components/counter/CounterPage";
import Menu from "./components/menu/Menu";
import PercentPage from "./components/percent/PercentPage";
import { DATA, PAGES } from "./constants";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK5AThcViMo2VQXo1LfErZ2VkLewAi-MY",
  authDomain: "counter-186fe.firebaseapp.com",
  projectId: "counter-186fe",
  storageBucket: "counter-186fe.firebasestorage.app",
  messagingSenderId: "743356393971",
  appId: "1:743356393971:web:00a16a70183343146a0a86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
