import counterIcon from "./../../assets/icons/counter-2.png";
import percentIcon from "./../../assets/icons/percent.png";

const Menu = () => {
  return (
    <div className="menu">
      <button className="menu-button">
        <img className="menu-button-icon" src={counterIcon}></img>
      </button>
      <button className="menu-button">
        <img className="menu-button-icon" src={percentIcon}></img>
      </button>
    </div>
  );
};

export default Menu;
