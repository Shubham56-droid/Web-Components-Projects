const clock = () => {
  const fullDate = new Date();

  let hour = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  let days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let day = days[fullDate.getDay()];
  let date = fullDate.getDate();
  let month = months[fullDate.getMonth()];
  let year = fullDate.getFullYear();

  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }

  document.getElementById('day').innerHTML = day;
  document.getElementById('hour').innerHTML = hour + ':';
  document.getElementById('min').innerHTML = minutes + '.';
  document.getElementById('sec').innerHTML = seconds;
  document.getElementById('calendar-day').innerHTML = date;
  document.getElementById('month').innerHTML = month;
  document.getElementById('year').innerHTML = year;
};

setInterval(clock, 1000);
