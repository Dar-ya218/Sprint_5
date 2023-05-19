async function fetchJoke() :Promise<string> {
    const response = await  fetch('https://icanhazdadjoke.com/', {
        headers: {"Accept": "application/json"}
    }  );
    const data = await response.json();
    return data.joke 
};
const siguienteJoke = document.getElementById("siguiente_joke");
siguienteJoke?.addEventListener("click", async()=>{
    const joke = await fetchJoke();
    console.log(joke)
});