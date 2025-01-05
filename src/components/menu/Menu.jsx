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

const hover = { scale: 1.2 };

const openMenuButtonVariants = {
  closed: { rotateX: 0 },
  open: { rotateX: 180, y: 10 },
  hover,
};

const Menu = ({ openCounter, openPercent }) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const renderMenuOption = (onClick, icon) => {
    return (
      <motion.button
        className="menu-button"
        onClick={onClick}
        whileHover={hover}
      >
        <img className="menu-button-icon" src={icon}></img>
      </motion.button>
    );
  };

  const renderOpenMenu = () => {
    return (
      <>
        {renderMenuOption(openCounter, counterIcon)}
        {renderMenuOption(openPercent, percentIcon)}
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
        whileHover="hover"
      >
        <img className="menu-open-button-icon" src={arrow} />
      </motion.button>
    </motion.div>
  );
};

export default Menu;
