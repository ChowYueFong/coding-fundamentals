function weeklySalaryProblem(array) {
  let weekdaySalary = 0;
  let weekendSalary = 0;
  for (let i = 0; i < 7; i++) {
    if (i < 5) {
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
