import "./App.css";
import Counter from "./Counter";

const RELATIONSHIP_START = "2021-12-04T04:00:00";
const VIKSI_BIRTHDAY = "1994-10-23";
const MARCI_BIRTHDAY = "1995-02-16";

const counterAnimation = {
  transition: { duration: 0.25 },
};

function App() {
  const relationshipStart = () => new Date(RELATIONSHIP_START);
  const viksiBirthday = () => new Date(VIKSI_BIRTHDAY);
  const marciBirthday = () => new Date(MARCI_BIRTHDAY);

  const now = () => new Date();

  return (
    <div>
      {/* <h1>Together for</h1> */}
      <Counter dateFrom={relationshipStart()} dateTo={now()} />
    </div>
  );
}

export default App;
