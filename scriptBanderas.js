const gameContainer = document.getElementById("game-container");

let score = 0; // Contador de respuestas correctas
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.textContent = `Aciertos: ${score} de 60`;
  document.body.insertBefore(scoreDisplay, gameContainer);


  const countries = [
    { correctCountry: "Venezuela", wrongCountry: "Perú", flag: "flags/venezuela.png" },
    { correctCountry: "Ucrania", wrongCountry: "Brasil", flag: "flags/ucrania.png" },
    { correctCountry: "Bélgica", wrongCountry: "Argentina", flag: "flags/belgica.png" },
    { correctCountry: "Países Bajos", wrongCountry: "Chile", flag: "flags/paises_bajos.png" },
    { correctCountry: "Argentina", wrongCountry: "México", flag: "flags/argentina.png" },
    { correctCountry: "Francia", wrongCountry: "Italia", flag: "flags/francia.png" },
    { correctCountry: "Brasil", wrongCountry: "Colombia", flag: "flags/brasil.png" },
    { correctCountry: "Chile", wrongCountry: "España", flag: "flags/chile.png" },
    { correctCountry: "Arabia Saudita", wrongCountry: "Irán", flag: "flags/arabia_saudita.png" },
    { correctCountry: "Irán", wrongCountry: "Kazajistán", flag: "flags/iran.png" },
    { correctCountry: "Colombia", wrongCountry: "Ecuador", flag: "flags/colombia.png" },
    { correctCountry: "Ecuador", wrongCountry: "Bolivia", flag: "flags/ecuador.png" },
    { correctCountry: "Marruecos", wrongCountry: "Egipto", flag: "flags/marruecos.png" },
    { correctCountry: "Kazajistán", wrongCountry: "Turquía", flag: "flags/kazajistan.png" },
    { correctCountry: "Jamaica", wrongCountry: "Cuba", flag: "flags/jamaica.png" },
    { correctCountry: "México", wrongCountry: "Honduras", flag: "flags/mexico.png" },
    { correctCountry: "Perú", wrongCountry: "Uruguay", flag: "flags/peru.png" },
    { correctCountry: "Uruguay", wrongCountry: "Paraguay", flag: "flags/uruguay.png" },
    { correctCountry: "Paraguay", wrongCountry: "Venezuela", flag: "flags/paraguay.png" },
    { correctCountry: "Bolivia", wrongCountry: "Argentina", flag: "flags/bolivia.png" },
    { correctCountry: "Italia", wrongCountry: "Portugal", flag: "flags/italia.png" },
    { correctCountry: "España", wrongCountry: "Francia", flag: "flags/espana.png" },
    { correctCountry: "Portugal", wrongCountry: "Alemania", flag: "flags/portugal.png" },
    { correctCountry: "Alemania", wrongCountry: "Reino Unido", flag: "flags/alemania.png" },
    { correctCountry: "Austria", wrongCountry: "Suiza", flag: "flags/austria.png" },
    { correctCountry: "Reino Unido", wrongCountry: "Irlanda", flag: "flags/reino_unido.png" },
    { correctCountry: "Irlanda", wrongCountry: "Suecia", flag: "flags/irlanda.png" },
    { correctCountry: "Rusia", wrongCountry: "China", flag: "flags/rusia.png" },
    { correctCountry: "China", wrongCountry: "Japón", flag: "flags/china.png" },
    { correctCountry: "Japón", wrongCountry: "Corea del Sur", flag: "flags/japon.png" },
    { correctCountry: "Corea del Sur", wrongCountry: "Vietnam", flag: "flags/corea_del_sur.png" },
    { correctCountry: "India", wrongCountry: "Pakistán", flag: "flags/india.png" },
    { correctCountry: "Australia", wrongCountry: "Nueva Zelanda", flag: "flags/australia.png" },
    { correctCountry: "Egipto", wrongCountry: "Sudáfrica", flag: "flags/egipto.png" },
    { correctCountry: "Sudáfrica", wrongCountry: "Nigeria", flag: "flags/sudafrica.png" },
    { correctCountry: "Nigeria", wrongCountry: "Canadá", flag: "flags/nigeria.png" },
    { correctCountry: "Canadá", wrongCountry: "Estados Unidos", flag: "flags/canada.png" },
    { correctCountry: "Estados Unidos", wrongCountry: "México", flag: "flags/estados_unidos.png" },
    { correctCountry: "Cuba", wrongCountry: "República Dominicana", flag: "flags/cuba.png" },
    { correctCountry: "Panamá", wrongCountry: "Costa Rica", flag: "flags/panama.png" },
    { correctCountry: "Costa Rica", wrongCountry: "Honduras", flag: "flags/costa_rica.png" },
    { correctCountry: "Honduras", wrongCountry: "El Salvador", flag: "flags/honduras.png" },
    { correctCountry: "El Salvador", wrongCountry: "Guatemala", flag: "flags/el_salvador.png" },
    { correctCountry: "Guatemala", wrongCountry: "Nicaragua", flag: "flags/guatemala.png" },
    { correctCountry: "Noruega", wrongCountry: "Suecia", flag: "flags/noruega.png" },
    { correctCountry: "Suecia", wrongCountry: "Finlandia", flag: "flags/suecia.png" },
    { correctCountry: "Finlandia", wrongCountry: "Dinamarca", flag: "flags/finlandia.png" },
    { correctCountry: "Dinamarca", wrongCountry: "Islandia", flag: "flags/dinamarca.png" },
    { correctCountry: "Islandia", wrongCountry: "Noruega", flag: "flags/islandia.png" },
    { correctCountry: "Turquía", wrongCountry: "Grecia", flag: "flags/turquia.png" },
    { correctCountry: "Grecia", wrongCountry: "Italia", flag: "flags/grecia.png" },
    { correctCountry: "Polonia", wrongCountry: "Hungría", flag: "flags/polonia.png" },
    { correctCountry: "Hungría", wrongCountry: "Austria", flag: "flags/hungria.png" },
    { correctCountry: "Filipinas", wrongCountry: "Malasia", flag: "flags/filipinas.png" },
    { correctCountry: "Vietnam", wrongCountry: "Tailandia", flag: "flags/vietnam.png" },
    { correctCountry: "Tailandia", wrongCountry: "Indonesia", flag: "flags/tailandia.png" },
    { correctCountry: "Malasia", wrongCountry: "Singapur", flag: "flags/malasia.png" },
    { correctCountry: "Pakistán", wrongCountry: "Afganistán", flag: "flags/pakistan.png" },
    { correctCountry: "Bangladés", wrongCountry: "India", flag: "flags/banglades.png" },
    { correctCountry: "Nueva Zelanda", wrongCountry: "Australia", flag: "flags/nueva_zelanda.png" }
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
  
  