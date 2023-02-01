const pageInput = document.getElementById("page");
const limitInput = document.getElementById("limit");
const btn = document.getElementById("js-btn");
const result = document.getElementById("js-result");


function sendRequest(page, limit) {
  let url = 'https://picsum.photos/v2/list?page='+page+'&limit='+limit;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onload = function () {
    let response = JSON.parse(xhr.response);
    let images = ``;
    localStorage.clear();
    for (let img of response) {
      const imgBlock = `
    <div class = "card">
          <img src = "${img.download_url}" 
          class = "card-image"/>
            <p>${img.author}</p>
    </div>
    `;
    images = images + imgBlock;
    }
    localStorage.setItem("images", images);
    result.innerHTML = images;
  }
  xhr.send();
}

function validateValue(value, valuesRange) {
  return typeof value === "number" && !isNaN(value) && value >= valuesRange[0] && value <= valuesRange[1];
}

btn.addEventListener("click", () => {
  let page = +pageInput.value;
  let limit = +limitInput.value;
  let valuesRange = [1, 10];
  if (validateValue(page, valuesRange) && validateValue(limit, valuesRange)) {
    sendRequest(page, limit);
  } else if (validateValue(page, valuesRange)) {
    result.innerText = "Лимит вне диапазона от 1 до 10";
  } else if (validateValue(limit, valuesRange)) {
    result.innerText = "Номер страницы вне диапазона от 1 до 10";
  } else {
    result.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  let imagesHtml = localStorage.getItem("images");
  if (imagesHtml) {
    result.innerHTML = imagesHtml;
}}); 