const text = document.querySelector(".text");
const container = document.querySelector(".container");

const start = () => {
  text.innerHTML = "Bread in";
  container.className = "container grow";

  setTimeout(() => {
    text.innerHTML = "Hold";
    setTimeout(() => {
      text.innerHTML = "Bread out";
      container.className = "container drop";
    }, 1500);
  }, 3000);
};

start(); //function execution
setInterval(start, 7500); //function call
