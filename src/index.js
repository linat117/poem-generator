function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Nothing Gold Can Stay",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
