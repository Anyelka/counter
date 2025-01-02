import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";
import { AnimatePresence, motion } from "motion/react";
import "./App.css";
import { FORMATS } from "./constants";

const variants = {
  initial: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 },
  exit: { y: -50, opacity: 0 },
};

const Counter = ({ dateFrom, dateTo, format, onClick, show }) => {
  const getDifference = (date1, date2) => {
    if (format == FORMATS.YEARS) {
      return differenceInYears(date2, date1);
    }
    if (format == FORMATS.MONTHS) {
      return differenceInMonths(date2, date1);
    }
    if (format == FORMATS.WEEKS) {
      return differenceInWeeks(date2, date1);
    }
    if (format == FORMATS.DAYS) {
      return differenceInDays(date2, date1);
    }
    if (format == FORMATS.HOURS) {
      return differenceInHours(date2, date1);
    }
    if (format == FORMATS.MINUTES) {
      return differenceInMinutes(date2, date1);
    }
    if (format == FORMATS.SECONDS) {
      return differenceInSeconds(date2, date1);
    }
    return 0;
  };

  const getCount = () => {
    return getDifference(dateFrom, dateTo);
  };

  const getCountPostfix = () => {
    if (format == FORMATS.YEARS) {
      return "years";
    }
    if (format == FORMATS.MONTHS) {
      return "months";
    }
    if (format == FORMATS.WEEKS) {
      return "weeks";
    }
    if (format == FORMATS.DAYS) {
      return "days";
    }
    if (format == FORMATS.HOURS) {
      return "hours";
    }
    if (format == FORMATS.MINUTES) {
      return "minutes";
    }
    if (format == FORMATS.SECONDS) {
      return "seconds";
    }
    return 0;
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="counter-wrapper counter-wrapper-absolute">
          <motion.div
            className="counter counter-absolute"
            onClick={onClick}
            variants={variants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <motion.div className="counter-number">{getCount()}</motion.div>
            <motion.div className="counter-postfix">
              {getCountPostfix()}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Counter;
