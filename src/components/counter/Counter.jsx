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
import { FORMATS } from "../../constants";
import { withEveryThirdDigitSeparated } from "../../utils";
import SecondCounter from "./SecondCounter";
import counterVariants from "./counterVariants";

const Counter = ({ getDateFrom, getDateTo, format, onClick, show }) => {
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
    return getDifference(getDateFrom(), getDateTo());
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

  const renderCounterNumber = () => {
    if (format == FORMATS.SECONDS) {
      return (
        <motion.div className="counter-number">
          <SecondCounter secs={getCount()} />
        </motion.div>
      );
    }
    return (
      <div className="counter-number">
        {withEveryThirdDigitSeparated(getCount())}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="counter-wrapper">
          <motion.div
            className="counter counter-absolute"
            onClick={onClick}
            variants={counterVariants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            {renderCounterNumber()}
            <div className="counter-postfix">{getCountPostfix()}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Counter;
