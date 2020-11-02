
export const formatTemperature = (temperature, isMetric) => {
  let returnTemp = temperature;
  if (!isMetric) {
    returnTemp = (temperature * 9) / 5 + 32;
  }
  return Math.round(returnTemp);
};
// (20°C × 9/5) + 32 = 68°F


