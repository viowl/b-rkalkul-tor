const result = document.querySelector(".result");
console.log(result.textContent);
const salaryPerHour = document.getElementById("salary-per-hour");
const day = document.getElementById("day-hour");
const daySalary = document.getElementById("day-salary");

salaryPerHour.addEventListener("input", calculateDaySalary);
day.addEventListener("input", calculateDaySalary);

function calculateDaySalary() {
  const salary = salaryPerHour.value;
  const hours = day.value;

  return (daySalary.textContent = (salary * hours).toFixed(2));
}
