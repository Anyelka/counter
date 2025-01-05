export const withEveryThirdDigitSeparated = (number) => {
  const numberString = number.toString();
  if (numberString.length < 6) {
    return numberString;
  }
  return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};

export const withTwoDigitPrecision = (number) => number.toFixed(2);

export const capitalize = (word) =>
  word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();

export const capitalizeWords = (words) =>
  words
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");

export const average = (date1, date2) =>
  (new Date(date1).getTime() + new Date(date2).getTime()) / 2;
