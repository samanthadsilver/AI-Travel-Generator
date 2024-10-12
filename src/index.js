function generateAdvice(event) {
  event.preventDefault();

  new Typewriter("#advice", {
    strings: "Advice is generating here",
    autoStart: true,
    cursor: "",
    delay: 50,
  });
}

let travelFormElement = document.querySelector("#travel-generator-form");
travelFormElement.addEventListener("submit", generateAdvice);
