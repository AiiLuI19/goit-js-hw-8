
// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное
//  хранилище когда пользователь что - то печатает.


import throttle from 'lodash.throttle';
// 1.Отслеживай на форме событие input, и каждый раз записывай в локальное 
// хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы.
// Пусть ключом для хранилища будет строка "feedback-form-state".
const refs = document.querySelector(".feedback-form")
const STORAGE_KEY = "feedback-form-state";
refs.addEventListener("submit", onFormSubmit)

populateMassageInput ()
refs.addEventListener('input', throttle(onDataLocalStorage, 500));

 function onDataLocalStorage(evt) {
   const { name, value } = evt.target;
      let saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
      saveData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
};

// 2.При загрузке страницы проверяй состояние хранилища, и если там есть 
// сохраненные данные, заполняй ими поля формы.В противном случае поля должны 
// быть пустыми.


function populateMassageInput() {
   const savedMessage = localStorage.getItem(STORAGE_KEY);
    if (savedMessage) { 
        Object.entries(JSON.parse (savedMessage)).forEach(([name, value]) => {
        refs.elements[name].value = value;
    })
    }
}
// 3.При сабмите формы очищай хранилище и поля формы, а также выводи объект с 
// полями email, message и текущими их значениями в консоль.

function onFormSubmit(evt) {
    evt.preventDefault()
    const saveData = localStorage.getItem(STORAGE_KEY);
        if (!saveData) return;
    console.log(JSON.parse(saveData));
    refs.reset();
    localStorage.removeItem(STORAGE_KEY);
}

