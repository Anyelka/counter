import counterIcon from "./../../assets/icons/counter-2.png";
import percentIcon from "./../../assets/icons/percent.png";

const Menu = ({ openCounter, openPercent }) => {
  return (
    <div className="menu">
      <button className="menu-button" onClick={openCounter}>
        <img className="menu-button-icon" src={counterIcon}></img>
      </button>
      <button className="menu-button" onClick={openPercent}>
        <img className="menu-button-icon" src={percentIcon}></img>
      </button>
    </div>
  );
};

export default Menu;
