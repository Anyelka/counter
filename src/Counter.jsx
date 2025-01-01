import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
} from "date-fns";
import { motion } from "motion/react";
import { useState } from "react";
import "./App.css";

const FORMATS = {
  YEARS: "YEARS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
  DAYS: "DAYS",
  HOURS: "HOURS",
  MINUTES: "MINUTES",
  SECONDS: "SECONDS",
};

const Counter = ({ dateFrom, dateTo }) => {
  const [format, setFormat] = useState(FORMATS.YEARS);

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

  const changeFormat = () => {
    const formats = Object.values(FORMATS);
    const nextFormat = formats[(formats.indexOf(format) + 1) % formats.length];
    setFormat(nextFormat);
  };

  return (
    <motion.div
      className="counter"
      onClick={changeFormat}
      layout
      transition={{ duration: 0.15 }}
    >
      <motion.div
        className="counter-number"
        layout
        transition={{ duration: 0.15 }}
      >
        {getCount()}
      </motion.div>
      <motion.div
        className="counter-postfix"
        layout
        transition={{ duration: 0.15 }}
      >
        {getCountPostfix()}
      </motion.div>
    </motion.div>
  );
};

export default Counter;
