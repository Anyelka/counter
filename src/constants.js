export const FORMATS = {
  YEARS: "YEARS",
  MONTHS: "MONTHS",
  WEEKS: "WEEKS",
  DAYS: "DAYS",
  HOURS: "HOURS",
  MINUTES: "MINUTES",
  SECONDS: "SECONDS",
};

const RELATIONSHIP_START = "2021-12-04T04:00:00";
const VIKSI_BIRTHDAY = "1994-10-23";
const MARCI_BIRTHDAY = "1995-02-16";

export const DATA = {
  US: {
    relationshipStart: RELATIONSHIP_START,
    persons: [
      { name: "VIKSI", gender: "F", birthday: VIKSI_BIRTHDAY },
      { name: "MARCI", gender: "M", birthday: MARCI_BIRTHDAY },
    ],
  },
};

export const PAGES = {
  COUNTER: "COUNTER",
  PERCENT: "PERCENT",
};
