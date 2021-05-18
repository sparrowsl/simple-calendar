const calendarBox = document.querySelector('.calendar');
let currentDate = document.querySelector('.date');
let currentDay = document.querySelector('.day');
let currentYear = document.querySelector('.year');
let currentMonth = document.querySelector('.month');
let dateExtension = document.querySelector('.th');

const timeBox = document.querySelector('.time');
let currentHour = document.querySelector('.hour');
let currentMinute = document.querySelector('.minute');
let currentSecond = document.querySelector('.second');

let today = new Date();

setInterval(function () {
  today = new Date();
  if (today.getHours() < 10) {
    currentHour.innerText = `0${today.getHours()}`;
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
currentDate.innerText = today.toDateString().split(' ')[2];
currentYear.innerText = today.toDateString().split(' ')[3];

// run this script every day
setInterval(function(){
  if(currentDate.innerText == 1){
    dateExtension.innerText = 'st';
  }else if(currentDate.innerText == 2){
    dateExtension.innerText = 'nd';
  }else if(currentDate.innerText == 3){
    dateExtension.innerText = 'rd';
  } else{
    dateExtension.innerText = 'th';
  }
}, 1_450_000);


function getFullDayName(day) {
  switch (day.toLowerCase()) {
    case 'mon':
      return "Monday";
    case 'tue':
      return "Tuesday";
    case 'wed':
      return "Wednesday";
    case 'thu':
      return "Thursday";
    case 'fri':
      return "Friday";
    case 'sat':
      return "Saturday";
    case 'sun':
      return "Sunday";
  }
}
