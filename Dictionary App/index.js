const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");
const input = document.getElementById("inp-word");

const x = () => {
  let inpWord = input.value;

  if (inpWord === "") {
    result.innerHTML = "<h3>Enter a word</h3>";
    return;
  }

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

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    x();
  }
});

/*

// Assigning variables

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");


// This declares a function x, which is the event handler for the search button.

const x = () => {
  let inpWord = document.getElementById("inp-word").value;
  fetch(`${url}${inpWord}`)
    .then((res) => res.json())
    .then((data) => { result.textContent = "";


//These lines create a new div element with the class "word" and append it to the result element. Inside the div, a h3 element is created to display the entered word, and a "Play Sound" button is created and appended. An event listener is added to the button to call the playSound function when clicked.

const wordDiv = document.createElement("div");
wordDiv.classList.add("word");

const wordHeading = document.createElement("h3");
wordHeading.textContent = inpWord;
wordDiv.appendChild(wordHeading);

const playButton = document.createElement("button");
playButton.textContent = "Play Sound";
playButton.addEventListener("click", playSound);
wordDiv.appendChild(playButton);

result.appendChild(wordDiv);

//These lines create a new div element with the class "details" and append it to the result element. Inside the div, two p elements are created to display the part of speech and phonetic representation of the word. 

const detailsDiv = document.createElement("div");
detailsDiv.classList.add("details");

const partOfSpeech = document.createElement("p");
partOfSpeech.textContent = data[0].meanings[0].partOfSpeech;
detailsDiv.appendChild(partOfSpeech);

const phonetic = document.createElement("p");
phonetic.textContent = `/${data[0].phonetic}/`;
detailsDiv.appendChild(phonetic);

result.appendChild(detailsDiv);

//This creates a new p element with the class "word-meaning" to display the definition of the word. The definition is obtained from the API response and assigned to the textContent property of the element.

      const meaningParagraph = document.createElement("p");
      meaningParagraph.classList.add("word-meaning");
      meaningParagraph.textContent = data[0].meanings[0].definitions[0].definition;
      result.appendChild(meaningParagraph);

//This checks if an example is available for the word in the API response. If an example exists, a new p element with the class "word-example" is created

      if (data[0].meanings[0].definitions[0].example) {
        const exampleParagraph = document.createElement("p");
        exampleParagraph.classList.add("word-example");
        exampleParagraph.textContent = data[0].meanings[0].definitions[0].example;
        result.appendChild(exampleParagraph);
      }
*/
