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
  if (formatHour(today.getHours()) < 10) {
    currentHour.innerText = `0${formatHour(today.getHours())}`;
  } else {
    currentHour.innerText = today.getHours();
  }

  if (today.getMinutes() < 10) {
    currentMinute.innerText = `0${today.getMinutes()}`;
  } else {
    currentMinute.innerText = today.getMinutes();
  }

  if (today.getSeconds() < 10) {
    currentSecond.innerText = `0${today.getSeconds()}`;
  } else {
    currentSecond.innerText = today.getSeconds();
  }
}, 990);

currentMonth = today.toDateString().split(' ')[1];
currentDay.innerText = `${getFullDayName(today.toDateString().split(' ')[0])} : ${currentMonth}`;
currentDate.innerText = today.toDateString().split(' ')[2]
currentYear.innerText = today.toDateString().split(' ')[3];

function formatHour(time){
  let hour = time;
  switch(time){
    case 13:
      hour = 1;
      break;
    case 14:
      hour = 2;
      break;
    case 15:
      hour = 3;
      break;
    case 16:
      hour = 4;
      break;
    case 17:
      hour = 5;
      break;
    case 18:
      hour = 6;
      break;
    case 19:
      hour = 7;
      break;
    case 20:
      hour = 8;
      break;
    case 21:
      hour = 9;
      break;
    case 22:
      hour = 10;
      break;
    case 23:
      hour = 11;
      break;
  }
  return hour;
}

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
