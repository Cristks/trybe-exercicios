function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };

  createDaysOfTheWeek();


  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function createDaysOfTheMonth() {
    let getDaysList = document.querySelector('#days');
  
  for (let index = 0; index < dezDaysList.length; index += 1) {
    
    let day = dezDaysList[index];
    let dayItem = document.createElement('li');
    dayItem.innerHTML = day;
    if (day === 24 || day === 31) {
      dayItem.className = 'day holiday'; 
     dayItem.innerHTMl = day;
      getDaysList.appendChild(dayItem); 

    } else if (day === 4 || day === 11 || day === 18) {
       dayItem.className = 'day friday'; 
      dayItem.innerHTMl = day;
      getDaysList.appendChild(dayItem);
    } else if (day === 25) {
      // Caso o dia for 25
      dayItem.className = 'day holiday friday'; // Atribua a classe 'day holiday friday' ao li criado
      dayItem.innerHTMl = day;
      getDaysList.appendChild(dayItem);
    } else {
      // Caso seja qualquer outro dia adicione a classe day ao li criado
      dayItem.className = 'day';
     dayItem.innerHTML = day;
      getDaysList.appendChild(dayItem);
    };
  };
};
createDaysOfTheMonth();


//Implemente uma função que crie dinamicamente um botão com o nome "Feriados".
function createHolidayButton(buttonName) {
    let buttonContainer = document.querySelector('.buttons-container');
    let newButton = document.createElement('button');
    let newButtonId = 'btn-holiday';

    newButton.innerHTML = buttonName;
    newButton.id = newButtonId;
    buttonContainer.appendChild(newButton);
}
createHolidayButton('Feriados');
//Sua função deve receber um parâmetro com a string 'Feriados'
//Adicione a este botão a ID "btn-holiday"
//Adicione este botão como filho/filha da tag <div> com classe "buttons-container"

//mplemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday".

function displayHolidays() {
    let getHolidayButton = document.querySelector('#btn-holiday'); // selecione o botão "Feriados";
    let getHolidays = document.querySelectorAll('.holiday');// Seleciona todos os feriados como um array de elementos;
    let backgroundColor = 'rgb(238,238,238)'; // armazena a cor da configuração inicial;
    let setNewColor = 'white';

    getHolidayButton.addEventListener('click', function() {
        for (let index = 0; index < getHolidays.length; index += 1) {
            if (getHolidays[index].style.backgroundColor === setNewColor) {
              getHolidays[index].style.backgroundColor = backgroundColor;
            } else {
              getHolidays[index].style.backgroundColor = setNewColor;
            }
          }
        });
      }
      displayHolidays();