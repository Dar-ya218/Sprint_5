"use strict";
// Nivel 2 Ejercicio_4 Weather API
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.addEventListener('load', () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch('https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&current_weather=true');
    const data = yield response.json();
    const currentWeather = data['current_weather'];
    console.log(data);
    let weatherIcon = 'icon';
    if (currentWeather.weathercode === 0) {
        weatherIcon = '☀️';
    }
    else if (currentWeather.weathercode === 1) {
        weatherIcon = '🌤️';
    }
    else if (currentWeather.weathercode === 2) {
        weatherIcon = '⛅';
    }
    else if (currentWeather.weathercode === 3) {
        weatherIcon = '☁️';
    }
    else if (currentWeather.weathercode === 45) {
        weatherIcon = '🌫️';
    }
    else if (currentWeather.weathercode === 48) {
        weatherIcon = '🌫️';
    }
    else if (currentWeather.weathercode === 51 || currentWeather.weathercode === 53 || currentWeather.weathercode === 55) {
        weatherIcon = '🌦️';
    }
    else if (currentWeather.weathercode === 61) {
        weatherIcon = '🌧️';
    }
    else if (currentWeather.weathercode === 63) {
        weatherIcon = '🌧️🌧️';
    }
    else if (currentWeather.weathercode === 65) {
        weatherIcon = '🌧️🌧️🌧️';
    }
    else if (currentWeather.weathercode === 71 || currentWeather.weathercode === 73 || currentWeather.weathercode === 75) {
        weatherIcon = '🌨️';
    }
    else if (currentWeather.weathercode === 95) {
        weatherIcon = '⛈️';
    }
    else {
        weatherIcon = '⚠️';
    }
    ;
    console.log(`Temperature: ${currentWeather.temperature}ºC`);
    console.log(`Icon: ${weatherIcon}`);
    const weatherParagraph = document.getElementById('weatherParagraph');
    if (weatherParagraph) {
        weatherParagraph.textContent = '';
    }
    weatherParagraph === null || weatherParagraph === void 0 ? void 0 : weatherParagraph.append(`${weatherIcon}  ${currentWeather.temperature}ºC`);
}));
//**** */
//Ejercicio 1
const jokeValor = [];
let jokeObject = {
    score: null,
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
// Ejercicio 5
function fetchChuckNorrisJokle() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch('https://api.chucknorris.io/jokes/random');
        const data = yield response.json();
        return data.value;
    });
}
;
const siguienteJoke = document.getElementById("siguiente_joke");
siguienteJoke === null || siguienteJoke === void 0 ? void 0 : siguienteJoke.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (jokeObject.score !== null) {
        jokeValor.push(jokeObject);
        console.log('jokeValor', jokeValor);
    }
    const randomJoke = Math.ceil(Math.random() * 2);
    let joke;
    if (randomJoke === 1) {
        joke = yield fetchJoke();
        console.log(joke);
        const jokeElement = document.getElementById("result");
        if (jokeElement instanceof HTMLElement) {
            jokeElement.innerHTML = joke; // Asignar el chiste al elemento con id "jokeElement"
        }
    }
    if (randomJoke === 2) {
        joke = yield fetchChuckNorrisJokle();
        console.log(joke);
        const jokeElement = document.getElementById("result");
        if (jokeElement instanceof HTMLElement) {
            jokeElement.innerHTML = joke; // Asignar el chiste al elemento con id "jokeElement"
        }
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
