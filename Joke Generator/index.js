const btn = document.getElementById("btn");
const url =
  "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
//https://sv443.net/jokeapi/v2/ to get the URL API

// To check the data object in JSON

let getJoke1 = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => console.log(item));
};

// To Get the Jokes
let getJoke = () => {
  jokeContainer.classList.remove("fade");
  fetch(url)
    .then((data) => data.json()) // this .then only fetch a promise so need to do another .then
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("fade");
    });
};

btn.addEventListener("click", getJoke);
