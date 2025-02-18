const gameContainer = document.getElementById("game-container");

  const colores = [
    { name: "rojo", correctColor: "red", wrongColor: "yellow" },
    { name: "azul", correctColor: "blue", wrongColor: "white" },
    { name: "verde", correctColor: "green", wrongColor: "purple" },
    { name: "naranja", correctColor: "orange", wrongColor: "pink" },
    { name: "morado", correctColor: "purple", wrongColor: "brown" },
    { name: "rosado", correctColor: "pink", wrongColor: "gray" },
    { name: "gris", correctColor: "gray", wrongColor: "black" },
    { name: "negro", correctColor: "black", wrongColor: "white" },
    { name: "blanco", correctColor: "white", wrongColor: "blue" },
    { name: "amarillo", correctColor: "yellow", wrongColor: "red" },
    { name: "turquesa", correctColor: "turquoise", wrongColor: "violet" },
    { name: "violeta", correctColor: "violet", wrongColor: "orange" },
    { name: "marrón", correctColor: "brown", wrongColor: "pink" },
    { name: "plateado", correctColor: "silver", wrongColor: "gold" },
    { name: "celeste", correctColor: "skyblue", wrongColor: "navy" },
    { name: "azul marino", correctColor: "navy", wrongColor: "turquoise" }
  ];

  
// Mezclar el array de países de forma aleatoria
colores.sort(() => Math.random() - 0.5);

  colores.forEach((color) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
   const ColorDiv = document.createElement("div");
   ColorDiv.classList.add("color-div");
   ColorDiv.style.backgroundColor = color.correctColor;
   card.appendChild(ColorDiv);

  
    // Nombre del color
    const colorName = document.createElement("h3");
    colorName.textContent = color.name;
    card.appendChild(colorName);
  
    // Botones de opciones
    // Opciones de color
const options = [
  { text: color.correctColor, isCorrect: true },
  { text: color.wrongColor, isCorrect: false },
];

// Mezclar opciones de forma aleatoria
options.sort(() => Math.random() - 0.5);

options.forEach((option) => {
  const button = document.createElement("button");
  button.textContent = option.text;
  button.addEventListener("click", () => handleAnswer(option.isCorrect, card));
  card.appendChild(button);
});

    gameContainer.appendChild(card);
  });
  
  function handleAnswer(isCorrect, card) {
    if (card.querySelector("p")) return; // Evitar múltiples mensajes
  
    const message = document.createElement("p");
    message.textContent = isCorrect ? "¡SIII, ES CORRECTO! 😁😎" : "Nooo! incorrecto...😭😓";
    message.style.color = isCorrect ? "green" : "red";
    card.appendChild(message);
  
  
    const buttons = card.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = true));
  }
  