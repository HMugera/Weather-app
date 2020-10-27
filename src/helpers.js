export const formatDate = (date) =>
  date.toLocaleDateString(undefined, { day: 'numeric', month: 'long' });

export const formatTemperature = (temperature, isMetric) => {
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
  }
  return Math.round(returnTemp);
};

export function getCurrentDate(){
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;

let monthName = months[month]

return `${monthName} ${date}`
}