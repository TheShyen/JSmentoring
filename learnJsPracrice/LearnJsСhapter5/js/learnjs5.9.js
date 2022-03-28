'use strict';

/* let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
function sumSalaries(salaries) {

    let sum = 0;
    for (let salary of Object.values(salaries)) {
      sum += salary;
    }
  
    return sum;
}

alert( sumSalaries(salaries) );



let user = {
    name: 'John',
    age: 30
};

function count(obj){
    return Object.keys(obj).length;
}
alert( count(user) ); */


/* function getWeekDay(date) {
  let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return days[date.getDay()];
}

let date = new Date(2014, 0, 3);
alert( getWeekDay(date) ); */


/* function getLocalDay(date) {
  let day = date.getDay();

  if (day == 0) { 
    day = 7;
  }

  return day;
}


let date = new Date(2012, 0, 3);
alert( getLocalDay(date) ); */

/* function getDateAgo(date, days) {
	let dateCopy = new Date(date);

  	dateCopy.setDate(date.getDate() - days);
  	return dateCopy.getDate();
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014) */

/* function getLastDayOfMonth(year, month){
	let date = new Date(year, month + 1, 0);
  	return date.getDate();
}

let date = new Date(2012, 1); */

/* function getSecondsToday() {
	let d = new Date();
  	return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
} */

let room = {
	number: 23
  };
  
let meetup = {
	title: "Совещание",
	occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
	place: room
};
  
room.occupiedBy = meetup;
meetup.self = meetup;
  
alert( JSON.stringify(meetup, function replacer(key, value) {
	return (key != "" && value == meetup) ? undefined : value;
}));