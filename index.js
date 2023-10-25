const result = document.querySelector('.result');
console.log(result.textContent);
const salary = document.getElementById('name-salary');
const day = document.getElementById('name-day');
const night = document.getElementById('name-night');
const button = document.querySelector('.button')

// salary.addEventListener('input', () => {
//     // Получить текущее значение инпута
//     const inputValue = salary.value;
  
//     // Теперь переменная inputValue содержит текущее значение инпута
//     console.log('Текущее значение ЗП: ' + inputValue);
//   });

// //   отслеживание инпут с днями 
// day.addEventListener('input', () => {

//     const inputDay = day.value;
//     console.log('количество дневных смен:' + inputDay)
//   });

// night.addEventListener('input', () => {
// const inputNight = night.value;
// console.log('кол-во ночей:' + inputNight)
// })
// console.log(salary.value)
function makeCalculatev () {
    const inputValue = salary.value;
    const inputDay = day.value;
    const inputNight = night.value;
    const allDay = inputValue * 12 * inputDay;
    const allNight = (inputValue * 12 * inputNight) * 1.35;



    const inputResult = (allDay + allNight) * 0.665;

   result.textContent = inputResult 
    
console.log(inputResult)

}

// кнопка
button.addEventListener('click', makeCalculatev)