import { motion } from "motion/react";
import { useState } from "react";
import arrow from "./../../assets/icons/arrow-2.png";
import counterIcon from "./../../assets/icons/counter-3.png";
import percentIcon from "./../../assets/icons/percent-2.png";

const menuVariants = {
  closed: {
    backgroundColor: "transparent",
    filter: "invert(100%)",
  },
  open: {
    backgroundColor: "#e9e7e7",
    paddingTop: "10px",
    filter: "invert(0%)",
  },
};

const openMenuButtonVariants = {
  closed: { rotateX: 0 },
  open: { rotateX: 180, y: 10 },
};

const Menu = ({ openCounter, openPercent }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const renderOpenMenu = () => {
    return (
      <>
        <button className="menu-button" onClick={openCounter}>
          <img className="menu-button-icon" src={counterIcon}></img>
        </button>
        <button className="menu-button" onClick={openPercent}>
          <img className="menu-button-icon" src={percentIcon}></img>
        </button>
      </>
    );
  };

  return (
    <motion.div
      className="menu"
      variants={menuVariants}
      initial="closed"
      animate={open ? "open" : "closed"}
      layout
    >
      {open && renderOpenMenu()}
      <motion.button
        className="menu-open-button"
        onClick={toggle}
        variants={openMenuButtonVariants}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <img className="menu-open-button-icon" src={arrow} />
      </motion.button>
    </motion.div>
  );
};

export default Menu;
