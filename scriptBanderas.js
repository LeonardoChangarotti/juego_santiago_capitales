const gameContainer = document.getElementById("game-container");

let score = 0; // Contador de respuestas correctas
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.textContent = `Aciertos: ${score} de 11`;
  document.body.insertBefore(scoreDisplay, gameContainer);


  const countries = [
    {correctCountry: "Venezuela", wrongCountry: "Peru", flag: "flags/venezuela.png" },
    { correctCountry: "Ucrania", wrongCountry: "Brasil", flag: "flags/ucrania.png" },
    { correctCountry: "Bélgica", wrongCountry: "Argentina", flag: "flags/belgica.png" },
    { correctCountry: "Países Bajos", wrongCountry: "Japón", flag: "flags/paises_bajos.png" },
    { correctCountry: "Argentina", wrongCountry: "Ucrania", flag: "flags/argentina.png" },
    { correctCountry: "Francia", wrongCountry: "Brasil", flag: "flags/francia.png" },
    { correctCountry: "Brasil", wrongCountry: "Chile", flag: "flags/brasil.png" },
    { correctCountry: "Chile", wrongCountry: "Argentina", flag: "flags/chile.png" },
    { correctCountry: "México", wrongCountry: "Brasil", flag: "flags/mexico.png" },
    { correctCountry: "España", wrongCountry: "Ucrania", flag: "flags/espana.png" },
    { correctCountry: "Japón", wrongCountry: "Chile", flag: "flags/japon.png" }

    ];
    
  
  countries.forEach((country) => {
    const card = document.createElement("div");
    card.classList.add("card");
  
    // Imagen de bandera (puedes sustituir src con las imágenes que añadas)
    const flag = document.createElement("img");
    flag.src = country.flag; // Cambia esto a la ruta de tu imagen
    flag.alt = `Bandera de ${country.name}`;
    card.appendChild(flag);
  
    // Nombre del país
    //const countryName = document.createElement("h3");
    //countryName.textContent = country.name;
    //card.appendChild(countryName);
  
    // Botones de opciones
    // Opciones de capital
const options = [
  { text: country.correctCountry, isCorrect: true },
  { text: country.wrongCountry, isCorrect: false },
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
  
    if (isCorrect) {
      score++;
      scoreDisplay.textContent = `Aciertos: ${score} de 11`;
    }
  
    const buttons = card.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = true));
  }
  
  