/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //VARIABLES
  const symbol = ["♣", "♠", "♥", "♦"];
  const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

  const up = document.querySelector("#palo1");
  const mid = document.querySelector("#valor");
  const down = document.querySelector("#palo2");
  const button = document.querySelector("#actualizar");
  const contador = document.getElementById("countDown");

  let segundos = 10;
  let intervalo = setInterval(actualizarConteo, 1000);

  //FUNCIONES
  function randomNumber() {
    return (mid.innerHTML =
      valores[Math.floor(Math.random() * valores.length)]);
  }

  function randomSymbol() {
    return symbol[Math.floor(Math.random() * symbol.length)];
  }

  const changeColor = value => {
    const color = value === "♥" || value === "♦" ? "red" : "white";
    up.style.color = color;
    mid.style.color = color;
    down.style.color = color;
  };

  function actualizarConteo() {
    contador.innerHTML = segundos;
    segundos--;
    if (segundos < 0) {
      clearInterval(intervalo);
      window.location.reload();
    }
  }

  function generarNuevaCarta() {
    const palo = randomSymbol();
    up.innerHTML = palo;
    down.innerHTML = palo;
    randomNumber();
    changeColor(palo);
  }

  //EVENTOS
  generarNuevaCarta();
  button.addEventListener("click", () => {
    clearInterval(intervalo);
    segundos = 10;
    contador.innerHTML = segundos;
    intervalo = setInterval(actualizarConteo, 1000);
    generarNuevaCarta();
  });
};
