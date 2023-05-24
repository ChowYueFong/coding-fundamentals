function weeklySalaryProblem(array) {
  let weekdaySalary = 0;
  let weekendSalary = 0;
  // loop through the array from Monday to Sunday
  for (let i = 0; i < 7; i++) {
    // working hours on weekdays
    if (i < 5) {
      // check for overtime working hours
      if (array[i] >= 0 && array[i] <= 8) {
        weekdaySalary = weekdaySalary + array[i] * 10;
      } else if (array[i] > 8) {
        weekdaySalary = weekdaySalary + (80 + (array[i] - 8) * 15);
      }
    } else {
      if (array[i] >= 0 && array[i] <= 8) {
        weekendSalary = weekendSalary + array[i] * 20;
      } else if (array[i] > 8) {
        weekendSalary = weekendSalary + (160 + (array[i] - 8) * 30);
      }
    }
  }
  return weekdaySalary + weekendSalary;
}

let workingHours1 = [8, 8, 8, 8, 8, 0, 0];
console.log(weeklySalaryProblem(workingHours1));
let workingHours2 = [10, 10, 10, 0, 8, 0, 0];
console.log(weeklySalaryProblem(workingHours2));
let workingHours3 = [0, 0, 0, 0, 0, 12, 0];
console.log(weeklySalaryProblem(workingHours3));

// Alternate Solution
function calculateSalary(hour, day) {
  const isWeekend = [6, 7].includes(day);
  const NORMAL_RATE = 10;
  const OVERTIME_RATE = 15;
  let salary = 0;

  if (hour <= 8) {
    salary = hour * NORMAL_RATE;
  } else {
    salary = 8 * NORMAL_RATE + (hour - 8) * OVERTIME_RATE;
  }
  return isWeekend ? salary * 2 : salary;
}

function weeklySalary(hours) {
  // array.reduce takes in 2 arguments, (function, initialValue)
  return hours.reduce(
    (total, current, index) => total + calculateSalary(current, index + 1),
    0
  );
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]) === 400);
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]) === 410);
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]) === 280);
