function displayPoem(response) {
  console.log("Poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "6e4a585d539f96a2f41a451dof03tbd2";
  let context = "You are a romantic  poem expert and love to write short poems. your mission is to generate a four line poem in basic html. Make sure to follow the user instructions";
  let prompt = `user instructions: Generate a poem about ${instructionInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log("Generating a poem");
   console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`);
  //api call
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
