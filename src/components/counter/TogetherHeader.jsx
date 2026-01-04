import { motion } from "motion/react";
import counterVariants from "./counterVariants";

const TogetherHeader = () => {
  return (
    <motion.div
      className="counter-header"
      variants={counterVariants}
      initial="initial"
      animate="visible"
    >
      <h1 className="counter-header-text-major">Together</h1>
      <h2 className="counter-header-text-minor">for</h2>
    </motion.div>
  );
};

export default TogetherHeader;
