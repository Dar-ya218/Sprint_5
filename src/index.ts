
// Nivel 2 Ejercicio_4 Weather API

window.addEventListener('load', async () => {
    const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=41.39&longitude=2.16&current_weather=true',);
    const data = await response.json();
    const currentWeather = data['current_weather'];
    console.log(data)
  
    let weatherIcon = 'icon'
  if (currentWeather.weathercode === 0) {
    weatherIcon = '☀️'
  } else if (currentWeather.weathercode === 1) {
    weatherIcon = '🌤️'
  } else if (currentWeather.weathercode === 2) {
    weatherIcon = '⛅'
  } else if (currentWeather.weathercode === 3) {
    weatherIcon = '☁️'
  } else if (currentWeather.weathercode === 45) {
    weatherIcon = '🌫️'
  } else if (currentWeather.weathercode === 48) {
    weatherIcon = '🌫️'
  } else if (currentWeather.weathercode === 51 || currentWeather.weathercode === 53 || currentWeather.weathercode === 55) {
    weatherIcon = '🌦️'
  } else if (currentWeather.weathercode === 61) {
    weatherIcon = '🌧️'
  } else if (currentWeather.weathercode === 63) {
    weatherIcon = '🌧️🌧️'
  } else if (currentWeather.weathercode === 65) {
    weatherIcon = '🌧️🌧️🌧️'
  } else if (currentWeather.weathercode === 71 || currentWeather.weathercode === 73 || currentWeather.weathercode === 75) {
    weatherIcon = '🌨️'
  } else if (currentWeather.weathercode === 95) {
    weatherIcon = '⛈️'
  } else {
    weatherIcon = '⚠️'
  };

  console.log(`Temperature: ${currentWeather.temperature} &deg`);
  console.log(`Icon: ${weatherIcon}`);

  const weatherParagraph = document.getElementById('weatherParagraph')
  if (weatherParagraph) {
    weatherParagraph.textContent = '';
  }
  weatherParagraph?.append(`${weatherIcon}  ${currentWeather.temperature}&deg`);
});

//**** */

const jokeValor: Array<object> = [];
let jokeObject: any = {
    score: 0,
}
async function fetchJoke() :Promise<string> { // esta en pausa, hasta que cumpla la promesa
    const response = await  fetch('https://icanhazdadjoke.com/',  { //espera hasta que traiga la respuesta
        headers: {"Accept": "application/json"}
    }  );
    const data = await response.json(); // que formatea y guarde la respuesta en formato json
    return data.joke 
};
const siguienteJoke = document.getElementById("siguiente_joke");
siguienteJoke?.addEventListener("click", async()=>{
    if (jokeObject.score !== 0) {
       jokeValor.push(jokeObject);
       console.log('jokeValor', jokeValor) 
    }
    const joke = await fetchJoke();
    console.log(joke)

    const jokeElement = document.getElementById("result");
  if (jokeElement instanceof HTMLElement) {
    jokeElement.innerHTML = joke; // Asignar el chiste al elemento con id "jokeElement"
  }
  const btnValor = document.getElementById("btn") as HTMLDivElement;
  btnValor.style.display = "block";

   jokeObject = {
    joke: joke,
    score: 0,
    fecha: date()
  }
  console.log('jokeObject',jokeObject);
  
  const btn1: any = document.getElementById("uno");
  const btn2: any = document.getElementById("dos");
  const btn3: any = document.getElementById("tres");
  
  btn1?.addEventListener("click", ()=>{
      jokeObject.score = 1;
      console.log('jokeObject', jokeObject)
  });
  btn2?.addEventListener("click", ()=>{
      jokeObject.score = 2;
      console.log('jokeObject',jokeObject)
  });
  btn3?.addEventListener("click", ()=>{
      jokeObject.score = 3;
      console.log('jokeObject',jokeObject)
  });
});

function date():string  {
    const d = new Date();
    let day = d.toISOString();
    return day
};
