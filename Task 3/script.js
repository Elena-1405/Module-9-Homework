/* Задание 3

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.
После получения данных вывести ниже картинки на экран.
Подсказка
Получение данных из input:
const value = document.querySelector('input').value;*/


const img = document.getElementById('image');
const resultNode = document.querySelector('.js-result');
const btnNode = document.querySelector('.js-btn');

function useRequest(url, callback){
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url , true);
  
  xhr.onload = function() {
  if (xhr.status != 200) {
    console.log('Response: ', xhr.status);
  }else{
    let result = JSON.parse(xhr.response);
    if (callback){
      callback(result);
    }
}
  };  
     
  xhr.onerror = function(){
    result.innerText = 'Error!';
};  
    xhr.send(); 
}; 

function displayResult (apiData){
  let cards = '';
  apiData.forEach(item => {
    const cardBlock = `
    <div class = "card">
          <img src = "${item.download_url}" 
          class = "card-image"/>
            <p>${item.author}</p>
    </div>
    `;
    cards = cards + cardBlock;           
  });
  resultNode.innerHTML = cards;
} 

btnNode.addEventListener('click', () => { 
  let getNumber = +document.getElementById('input').value;
  if (getNumber < 1 || getNumber > 10 || isNaN(getNumber) || typeof getNumber !== 'number') { 
    resultNode.innerHTML = 'число вне диапазона от 1 до 10';
    return 
  } else {
  useRequest('https://picsum.photos/v2/list?limit='+getNumber, displayResult)
  };  
})

