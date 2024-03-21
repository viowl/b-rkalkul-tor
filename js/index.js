const salaryPerHour = document.getElementById("salary-per-hour");

const day = document.getElementById("day-hour");
const daySalary = document.getElementById("day-salary");

day.addEventListener("input", calculateDaySalary);

function calculateDaySalary(event) {
  const dayHour = event.currentTarget.value;
  console.log(dayHour);
  const salary = salaryPerHour.value;
  console.log(salary);
  if (dayHour !== "") {
    daySalary.textContent = `${salary * dayHour} HUF`;
  }
}

// night
const night = document.getElementById("night-hour");
const nightSalary = document.getElementById("night-salary");

night.addEventListener("input", calculateNightSalary);

function calculateNightSalary(event) {
  const nightHour = event.currentTarget.value;
  console.log(nightHour);
  const salary = salaryPerHour.value;
  if (nightHour !== "") {
    nightSalary.textContent = `${salary * nightHour * 0.35} HUF`;
  }
}

// sunday

const sunday = document.getElementById("sunday-hour");
const sundaySalary = document.getElementById("sunday-salary");

sunday.addEventListener("input", calculateSunday);

function calculateSunday(event) {
  const sundayHour = event.currentTarget.value;
  const salary = salaryPerHour.value;
  if (sundayHour !== "") {
    sundaySalary.textContent = `${salary * sundayHour * 0.5} HUF`;
  }
}

//overtime
const overtime = document.getElementById("overtime-hour");
const overtimeSalary = document.getElementById("overtime-salary");

function calculateOvertime(event) {
  const overtimeHour = event.currentTarget.value;
  const salary = salaryPerHour.value;
  if (overtimeHour !== "") {
    overtimeSalary.textContent = `${salary * overtimeHour} HUF`;
  }
}

overtime.addEventListener("input", calculateOvertime);

//overtime50

const overtime50 = document.getElementById("overtime50-hour");
const overtimeSalary50 = document.getElementById("overtime50-salary");

function calculateOvertime50(event) {
  const overtime50Hour = event.currentTarget.value;
  const salary = salaryPerHour.value;
  if (overtime50Hour !== "") {
    overtimeSalary50.textContent = `${salary * overtime50Hour * 0.5} HUF`;
  }
}

overtime50.addEventListener("input", calculateOvertime50);

//day-of

const dayOf = document.getElementById("day-of-hour");
const dayOfHourSalary = document.getElementById("day-of-salary");

function calculateDayOf(event) {
  const dayOfHour = event.currentTarget.value;
  const salary = salaryPerHour.value;
  if (dayOfHour !== "") {
    dayOfHourSalary.textContent = `${salary * dayOfHour * 0.164} HUF`;
  }
}

dayOf.addEventListener("input", calculateDayOf);

const bruto = document.getElementById("bruto");

// const salaryPerHour = document.getElementById("salary-per-hour");

// const workTypes = {
//   day: {
//     input: document.getElementById("day-hour"),
//     output: document.getElementById("day-salary"),
//     multiplier: 1,
//   },
//   night: {
//     input: document.getElementById("night-hour"),
//     output: document.getElementById("night-salary"),
//     multiplier: 0.35,
//   },
//   sunday: {
//     input: document.getElementById("sunday-hour"),
//     output: document.getElementById("sunday-salary"),
//     multiplier: 0.5,
//   },
//   overtime: {
//     input: document.getElementById("overtime-hour"),
//     output: document.getElementById("overtime-salary"),
//     multiplier: 1,
//   },
//   overtime50: {
//     input: document.getElementById("overtime50-hour"),
//     output: document.getElementById("overtime50-salary"),
//     multiplier: 0.5,
//   },
//   dayOf: {
//     input: document.getElementById("day-of-hour"),
//     output: document.getElementById("day-of-salary"),
//     multiplier: 0.164,
//   },
// };

// Object.values(workTypes).forEach((type) => {
//   type.input.addEventListener("input", () => calculateSalary(type));
// });

// function calculateSalary(type) {
//   const hours = type.input.value;
//   const salary = salaryPerHour.value;
//   if (hours !== "") {
//     const totalSalary = salary * hours * type.multiplier;
//     type.output.textContent = `${totalSalary} HUF`;
//   }
// }

// function calculateTotalSalary() {
//   const allSalaryElements = document.querySelectorAll(
//     '.middle-table td[id$="-salary"]'
//   );
//   let totalSalary = 0;
//   allSalaryElements.forEach((element) => {
//     const salaryText = element.textContent.trim();
//     if (salaryText !== "") {
//       const salaryValue = parseFloat(salaryText.replace(" HUF", ""));
//       totalSalary += salaryValue;
//     }
//   });
//   return totalSalary;
// }

// // Пример использования функции
// const totalSalary = calculateTotalSalary();
// console.log(`Total salary: ${totalSalary} HUF`);
