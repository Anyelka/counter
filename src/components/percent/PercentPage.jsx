import { useState } from "react";
import { average } from "../../utils";
import Percent from "./Percent";

const PercentPage = ({ getDateFrom, getDateTo, persons }) => {
  const [pageOpen, setPageOpen] = useState(persons[0].name);

  const pages = [
    { ...persons[0], pair: persons[1].name },
    { ...persons[1], pair: persons[0].name },
    {
      name: `${persons[0].name} & ${persons[1].name}`,
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
