import { motion } from "motion/react";
import counterVariants from "./counterVariants";

const WeddingFooter = () => {
  return (
    <motion.div
      className="counter-footer"
      variants={counterVariants}
      initial="initial"
      animate="visible"
    >
      <h2 className="counter-header-text-minor-2">until</h2>
      <p className="counter-header-text-major-21">Martoria</p>
      <p className="counter-header-text-major-22">2026.09.05</p>
    </motion.div>
  );
};

export default WeddingFooter;
