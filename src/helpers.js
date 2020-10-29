export const formatDate = (date) =>
  date.toLocaleDateString(undefined, { day: "numeric", month: "long" });

export const formatTemperature = (temperature, isMetric) => {
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature * 9) / 5 + 32;
  }
  return Math.round(returnTemp);
};
// (20°C × 9/5) + 32 = 68°F

export function getCurrentDate() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let monthName = months[month];

  return `${monthName} ${date}`;
}


