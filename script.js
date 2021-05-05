const calendarBox = document.querySelector('.calendar');
let currentDate = document.querySelector('.date');
let currentDay = document.querySelector('.day');
let currentYear = document.querySelector('.year');
let currentMonth = document.querySelector('.month');

const timeBox = document.querySelector('.time');
let currentHour = document.querySelector('.hour');
let currentMinute = document.querySelector('.minute');
let currentSecond = document.querySelector('.second');

let today = new Date();

setInterval(function () {
  today = new Date();
  if (today.getSeconds() < 10) {
    currentHour.innerText = `0${today.getHours()}`;
    currentMinute.innerText = `0${today.getMinutes()}`;
    currentSecond.innerText = `0${today.getSeconds()}`;
  } else {
    currentHour.innerText = today.getHours();
    currentMinute.innerText = today.getMinutes();
    currentSecond.innerText = today.getSeconds();
  }
}, 990);

currentMonth = today.toDateString().split(' ')[1];
currentDay.innerText = `${getFullDayName(today.toDateString().split(' ')[0])} : ${currentMonth}`;
currentDate.innerText = today.toDateString().split(' ')[2]
currentYear.innerText = today.toDateString().split(' ')[3];

function getFullDayName(day) {
  let dayName = "";
  switch (day.toLowerCase()) {
    case 'mon':
      dayName = "Monday";
      break;
    case 'tue':
      dayName = "Tuesday";
      break;
    case 'wed':
      dayName = "Wednesday";
      break;
    case 'thu':
      dayName = "Thursday";
      break;
    case 'fri':
      dayName = "Friday";
      break;
    case 'sat':
      dayName = "Saturday";
      break;
    case 'sun':
      dayName = "Sunday";
      break;
  }
  return dayName;
}
