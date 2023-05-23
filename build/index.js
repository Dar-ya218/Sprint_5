"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jokeValor = [];
let jokeObject = {
    score: 0,
};
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://icanhazdadjoke.com/', {
            headers: { "Accept": "application/json" }
        });
        const data = yield response.json(); // que formatea y guarde la respuesta en formato json
        return data.joke;
    });
}
;
const siguienteJoke = document.getElementById("siguiente_joke");
siguienteJoke === null || siguienteJoke === void 0 ? void 0 : siguienteJoke.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (jokeObject.score !== 0) {
        jokeValor.push(jokeObject);
        console.log('jokeValor', jokeValor);
    }
    const joke = yield fetchJoke();
    console.log(joke);
    const jokeElement = document.getElementById("result");
    if (jokeElement instanceof HTMLElement) {
        jokeElement.innerHTML = joke; // Asignar el chiste al elemento con id "jokeElement"
    }
    const btnValor = document.getElementById("btn");
    btnValor.style.display = "block";
    jokeObject = {
        joke: joke,
        score: 0,
        fecha: date()
    };
    console.log('jokeObject', jokeObject);
    const btn1 = document.getElementById("uno");
    const btn2 = document.getElementById("dos");
    const btn3 = document.getElementById("tres");
    btn1 === null || btn1 === void 0 ? void 0 : btn1.addEventListener("click", () => {
        jokeObject.score = 1;
        console.log('jokeObject', jokeObject);
    });
    btn2 === null || btn2 === void 0 ? void 0 : btn2.addEventListener("click", () => {
        jokeObject.score = 2;
        console.log('jokeObject', jokeObject);
    });
    btn3 === null || btn3 === void 0 ? void 0 : btn3.addEventListener("click", () => {
        jokeObject.score = 3;
        console.log('jokeObject', jokeObject);
    });
}));
function date() {
    const d = new Date();
    let day = d.toISOString();
    return day;
}
;
/* const dos: any = document.getElementById("dos")!;
dos.addEventListener("click", () => {
    reportAcudits.push({
      joke: document.getElementById("chiste")?.innerHTML,
      score: 2,
      date: dateToday,
    });
    console.log(reportAcudits);
  }); */ 
