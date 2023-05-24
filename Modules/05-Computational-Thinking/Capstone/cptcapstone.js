function getDays(startDate, endDate) {
  // .getTime() get time of the date in milliseconds using new Date("Month Day, Year") format
  // (1000 * 60 * 60 * 24) is the amount of time in milliseconds in 1 day
  // Math.floor takes the difference in time of endDate and startDate and counts how many 24 hours there is
  return Math.floor(
    (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
  );
}

console.log(getDays(new Date("June 14, 2019"), new Date("June 20, 2019")));
console.log(
  getDays(new Date("December 29, 2018"), new Date("January 1, 2019"))
);
console.log(getDays(new Date("July 20, 2019"), new Date("July 30, 2019")));
