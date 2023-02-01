const btn = document.getElementById("send");
const img = document.getElementById("image");
const inputFirst = document.getElementById("inputFirst");
const inputSecond = document.getElementById("inputSecond");
const result = document.getElementById("result");


btn.addEventListener("click", () => {
  let firstNum = +inputFirst.value;
  let secondNum = +inputSecond.value;
  if (typeof firstNum === "number" && typeof secondNum === "number" && !isNaN(firstNum) && !isNaN(secondNum) && (firstNum >= 100 && firstNum <= 300 && secondNum >= 100 && secondNum <= 300)) { 
      result.innerText = "";
      fetch('https://picsum.photos/'+firstNum+'/'+secondNum)                         .then((response) => {
  return response;
})
.then((data) => {
      img.setAttribute("src", data.url);
})
.catch(() => {console.log('error')});
   
    } else {
      result.innerText = "Одно из чисел вне диапазона от 100 до 300";
  }
})