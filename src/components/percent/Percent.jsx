import { differenceInMinutes } from "date-fns";
import { AnimatePresence, motion } from "motion/react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import {
  capitalize,
  capitalizeWords,
  withTwoDigitPrecision,
} from "../../utils";

const variants = {
  initial: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -200, opacity: 0 },
};

const getPercentage = (dateFrom, dateTo, birthday) =>
  withTwoDigitPrecision(getBirthdayPercent(dateFrom, dateTo, birthday));

const getBirthdayPercent = (dateFrom, dateTo, birthday) => {
  return (
    100 *
    (differenceInMinutes(dateFrom, dateTo) /
      differenceInMinutes(birthday, dateTo))
  );
};

const Percent = ({ getDateFrom, getDateTo, person, isOpen, changePerson }) => {
  const getFooterText = (person) => {
    if (person.gender == "NA") {
      return (
        <div className="percent-footer-text">
          <span className="percent-footer-text-basic">of their lives </span>
          <span className="percent-footer-text-highlighted">Together</span>
        </div>
      );
    }
    if (person.gender == "M") {
      return (
        <div className="percent-footer-text">
          <div className="percent-footer-text-basic">
            of his life with {capitalize(person.pair)}
          </div>
        </div>
      );
    }
    if (person.gender == "F") {
      return (
        <div className="percent-footer-text">
          <div className="percent-footer-text-basic">
            of her life with {capitalize(person.pair)}
          </div>
        </div>
      );
    }
    return (
      <div className="percent-footer-text">INVALID GENDER: {person.gender}</div>
    );
  };

  const percentage = getPercentage(getDateFrom(), getDateTo(), person.birthday);

  return (
    <AnimatePresence>
      {isOpen(person) && (
        <div className="percent-person-wrapper">
          <motion.div
            className="percent-person"
            onClick={changePerson}
            variants={variants}
            initial="initial"
            animate="visible"
            exit="exit"
          >
            <div className="percent-header-text-major">
              {capitalizeWords(person.name)}
            </div>
            {<div className="percent-header-text-minor">spent</div>}
            <div className="percent-progress-bar-container">
              <CircularProgressbarWithChildren
                className="percent"
                value={percentage}
              >
                <div className="percent-number">{`${percentage}%`}</div>
              </CircularProgressbarWithChildren>
            </div>
            {getFooterText(person)}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Percent;
