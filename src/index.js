function displayAdvice(response) {
  new Typewriter("#advice", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 20,
  });
}

function generateAdvice(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#location");
  let apiKey = "dd9ad0073b1c71eoafbt4187fa1bef0d";
  let context =
    "You are a very well-travelled AI and have been to every country in the world. Please give eight recommendation on things to see and do and write this in basic HTML. Include a title in <h1> and include each suggestion below with the headline of the suggestions in <h2> and then further instructions below as body text. Do not put ```html at the beginning or ``` at the end. Please follow the user instructions";
  let prompt = `User intructions: Generate recommendations on travelling to ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let adviceElement = document.querySelector("#advice");
  adviceElement.classList.remove("hidden");
  adviceElement.innerHTML = `<div class="generating"> ⌛ Generating Travel Advice about ${instructionsInput.value}</div>`;

  console.log("Generating advice");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayAdvice);
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateAdvice);
