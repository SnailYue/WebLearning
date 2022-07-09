const jokeElement = document.getElementById("joke");
const jokeButton = document.getElementById("jokeButton");

const generateJoke = async () => {
    const config = {
        headers: { Accept: "application/json" },
    }

    const res = await fetch("https://icanhazdadjoke.com/", config);
    const data = await res.json();
    jokeElement.innerHTML = data.joke;
}

generateJoke();

jokeButton.addEventListener("click", () => generateJoke());