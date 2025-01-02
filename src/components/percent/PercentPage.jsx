import { differenceInMinutes } from "date-fns";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const variants = {
  initial: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -50, opacity: 0 },
};

const getPercent = (dateFrom, dateTo, birthday) => {
  return (
    100 *
    (differenceInMinutes(dateFrom, dateTo) /
      differenceInMinutes(birthday, dateTo))
  );
};

const average = (date1, date2) =>
  (new Date(date1).getTime() + new Date(date2).getTime()) / 2;

const Percent = ({ getDateFrom, getDateTo, person, isOpen, changePerson }) => {
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
            <div>{person.name}</div>
            <div>{getPercent(getDateFrom(), getDateTo(), person.birthday)}</div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const PercentPage = ({ getDateFrom, getDateTo, persons }) => {
  const [pageOpen, setPageOpen] = useState(persons[0].name);

  const pages = [
    ...persons,
    {
      name: "AVERAGE",
      gender: "NA",
      birthday: average(persons[0].birthday, persons[1].birthday),
    },
  ];

  const changePage = () => {
    const nextPersonOpen =
      pages[
        (pages.indexOf(pages.find((p) => p.name === pageOpen)) + 1) %
          pages.length
      ];
    setPageOpen(nextPersonOpen.name);
  };

  return (
    <div className="percent-page">
      {pages.map((page) => (
        <Percent
          getDateFrom={getDateFrom}
          getDateTo={getDateTo}
          person={page}
          isOpen={() => pageOpen === page.name}
          changePerson={changePage}
        />
      ))}
    </div>
  );
};

export default PercentPage;
