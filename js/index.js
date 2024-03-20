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
