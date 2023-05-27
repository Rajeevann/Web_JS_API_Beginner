const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

const x = () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((res) => res.json())
    .then((data) => {
      result.innerHTML = `
        <div class="word">
          <h3>${inpWord}</h3>
          <button onClick="playSound()"><i class="fas fa-volume-up"></i></button>
        </div>
        <div class="details">
          <p>${data[0].meanings[0].partOfSpeech}</p>
          <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-meaning">
          ${data[0].meanings[0].definitions[1].definition}
        </p>
        <p class="word-example">
          ${data[0].meanings[0].definitions[0].example || ""}
        </p>`;

      sound.setAttribute("src", `${data[0].phonetics[0].sourceUrl}`);
    })
    .catch(() => {
      result.innerHTML = `<h3>Could not find the word</h3>`;
    });
};

function playSound() {
  sound.play();
}

btn.addEventListener("click", x);
