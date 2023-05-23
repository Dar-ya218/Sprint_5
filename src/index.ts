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









/* const dos: any = document.getElementById("dos")!;
dos.addEventListener("click", () => {
    reportAcudits.push({
      joke: document.getElementById("chiste")?.innerHTML,
      score: 2,
      date: dateToday,
    });
    console.log(reportAcudits);
  }); */