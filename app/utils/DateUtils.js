const daysMap = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
};

const daysAbbrMap = {
  0: 'Sun',
  1: 'Mon',
  2: 'Tue',
  3: 'Wed',
  4: 'Th',
  5: 'Fri',
  6: 'Sat',
};

const monthsMap = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'Aug',
  8: 'Sept',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
};

function convertTemp(kelvin) {
  return parseInt(((kelvin - 273.15)* 1.8000 + 32.00), 10);
}

function getTime(unixTimestmap) {
  const date = new Date(unixTimestmap * 1000);
  const time = getTimeStr(date);
  return time;
}

function getTimeStr(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

function getDayOfWeek(unixTimestmap) {
  const date = new Date(unixTimestmap * 1000);
  const day = daysMap[date.getDay()]
  const month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day; //+ ', ' + month;
}

function getDayOfWeekAbbr(unixTimestmap) {
  const date = new Date(unixTimestmap * 1000);
  const day = daysAbbrMap[date.getDay()]
  const month = monthsMap[date.getMonth()] + ' ' + date.getDate();
  return day; // + ', ' + month;
}

function getNow() {
  const date = new Date();
  const time = getTimeStr(date);
  return time;
}

module.exports = {
  convertTemp: convertTemp,
  getTime: getTime,
  getDayOfWeek: getDayOfWeek,
  getDayOfWeekAbbr: getDayOfWeekAbbr,
  getNow: getNow,
};
