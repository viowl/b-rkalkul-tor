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
