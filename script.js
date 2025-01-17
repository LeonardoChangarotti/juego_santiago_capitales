const gameContainer = document.getElementById("game-container");

let score = 0; // Contador de respuestas correctas
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.textContent = `Aciertos: ${score} de 50`;
  document.body.insertBefore(scoreDisplay, gameContainer);


const countries = [
    { name: "Venezuela", correctCapital: "Caracas", wrongCapital: "Bogotá", flag: "flags/venezuela.png" },

    { name: "Ucrania", correctCapital: "Kiev", wrongCapital: "Minsk", flag: "flags/ucrania.png" },
    { name: "Bélgica", correctCapital: "Bruselas", wrongCapital: "Ámsterdam", flag: "flags/belgica.png" },
    { name: "Países Bajos", correctCapital: "Ámsterdam", wrongCapital: "Bruselas", flag: "flags/paises_bajos.png" },


    { name: "Argentina", correctCapital: "Buenos Aires", wrongCapital: "Lima", flag: "flags/argentina.png" },
    { name: "Francia", correctCapital: "París", wrongCapital: "Roma", flag: "flags/francia.png" },
    { name: "Brasil", correctCapital: "Brasilia", wrongCapital: "Santiago", flag: "flags/brasil.png" },
    { name: "Chile", correctCapital: "Santiago", wrongCapital: "Quito", flag: "flags/chile.png" },

    { name: "Arabia Saudita", correctCapital: "Riad", wrongCapital: "Jeddah", flag: "flags/arabia_saudita.png" },
    { name: "Irán", correctCapital: "Teherán", wrongCapital: "Bagdad", flag: "flags/iran.png" },


    { name: "Colombia", correctCapital: "Bogotá", wrongCapital: "Lima", flag: "flags/colombia.png" },
    { name: "Ecuador", correctCapital: "Quito", wrongCapital: "Caracas", flag: "flags/ecuador.png" },
    { name: "México", correctCapital: "Ciudad de México", wrongCapital: "Guatemala", flag: "flags/mexico.png" },
    { name: "Perú", correctCapital: "Lima", wrongCapital: "Asunción", flag: "flags/peru.png" },
    { name: "Uruguay", correctCapital: "Montevideo", wrongCapital: "Brasilia", flag: "flags/uruguay.png" },
    { name: "Paraguay", correctCapital: "Asunción", wrongCapital: "Sucre", flag: "flags/paraguay.png" },
    { name: "Bolivia", correctCapital: "Sucre", wrongCapital: "La Paz", flag: "flags/bolivia.png" },
    { name: "Italia", correctCapital: "Roma", wrongCapital: "Atenas", flag: "flags/italia.png" },
    { name: "España", correctCapital: "Madrid", wrongCapital: "Lisboa", flag: "flags/espana.png" },
    { name: "Portugal", correctCapital: "Lisboa", wrongCapital: "Madrid", flag: "flags/portugal.png" },
    { name: "Alemania", correctCapital: "Berlín", wrongCapital: "Viena", flag: "flags/alemania.png" },
    { name: "Austria", correctCapital: "Viena", wrongCapital: "Berlín", flag: "flags/austria.png" },
    { name: "Reino Unido", correctCapital: "Londres", wrongCapital: "Dublín", flag: "flags/reino_unido.png" },
    { name: "Irlanda", correctCapital: "Dublín", wrongCapital: "Edimburgo", flag: "flags/irlanda.png" },
    { name: "Rusia", correctCapital: "Moscú", wrongCapital: "Varsovia", flag: "flags/rusia.png" },
    { name: "China", correctCapital: "Pekín", wrongCapital: "Tokio", flag: "flags/china.png" },
    { name: "Japón", correctCapital: "Tokio", wrongCapital: "Seúl", flag: "flags/japon.png" },
    { name: "Corea del Sur", correctCapital: "Seúl", wrongCapital: "Bangkok", flag: "flags/corea_del_sur.png" },
    { name: "India", correctCapital: "Nueva Delhi", wrongCapital: "Kabul", flag: "flags/india.png" },
    { name: "Australia", correctCapital: "Canberra", wrongCapital: "Sídney", flag: "flags/australia.png" },
    { name: "Egipto", correctCapital: "El Cairo", wrongCapital: "Trípoli", flag: "flags/egipto.png" },
    { name: "Sudáfrica", correctCapital: "Pretoria", wrongCapital: "Ciudad del Cabo", flag: "flags/sudafrica.png" },
    { name: "Nigeria", correctCapital: "Abuja", wrongCapital: "Accra", flag: "flags/nigeria.png" },
    { name: "Canadá", correctCapital: "Ottawa", wrongCapital: "Toronto", flag: "flags/canada.png" },
    { name: "Estados Unidos", correctCapital: "Washington D.C.", wrongCapital: "Nueva York", flag: "flags/estados_unidos.png" },
    { name: "Cuba", correctCapital: "La Habana", wrongCapital: "San Juan", flag: "flags/cuba.png" },
    { name: "Panamá", correctCapital: "Ciudad de Panamá", wrongCapital: "San José", flag: "flags/panama.png" },
    { name: "Costa Rica", correctCapital: "San José", wrongCapital: "Managua", flag: "flags/costa_rica.png" },
    { name: "Honduras", correctCapital: "Tegucigalpa", wrongCapital: "San Salvador", flag: "flags/honduras.png" },
    { name: "El Salvador", correctCapital: "San Salvador", wrongCapital: "Tegucigalpa", flag: "flags/el_salvador.png" },
    { name: "Guatemala", correctCapital: "Ciudad de Guatemala", wrongCapital: "Belmopán", flag: "flags/guatemala.png" },
    { name: "Noruega", correctCapital: "Oslo", wrongCapital: "Estocolmo", flag: "flags/noruega.png" },
    { name: "Suecia", correctCapital: "Estocolmo", wrongCapital: "Helsinki", flag: "flags/suecia.png" },
    { name: "Finlandia", correctCapital: "Helsinki", wrongCapital: "Oslo", flag: "flags/finlandia.png" },
    { name: "Dinamarca", correctCapital: "Copenhague", wrongCapital: "Reikiavik", flag: "flags/dinamarca.png" },
    { name: "Islandia", correctCapital: "Reikiavik", wrongCapital: "Copenhague", flag: "flags/islandia.png" },
    { name: "Turquía", correctCapital: "Ankara", wrongCapital: "Estambul", flag: "flags/turquia.png" },
    { name: "Grecia", correctCapital: "Atenas", wrongCapital: "Roma", flag: "flags/grecia.png" },
    { name: "Polonia", correctCapital: "Varsovia", wrongCapital: "Praga", flag: "flags/polonia.png" },
    { name: "Hungría", correctCapital: "Budapest", wrongCapital: "Viena", flag: "flags/hungria.png" },
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
    const countryName = document.createElement("h3");
    countryName.textContent = country.name;
    card.appendChild(countryName);
  
    // Botones de opciones
    // Opciones de capital
const options = [
  { text: country.correctCapital, isCorrect: true },
  { text: country.wrongCapital, isCorrect: false },
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
    message.textContent = isCorrect ? "¡SI, ES CORRECTO!" : "No";
    message.style.color = isCorrect ? "green" : "red";
    card.appendChild(message);
  
    if (isCorrect) {
      score++;
      scoreDisplay.textContent = `Aciertos: ${score} de 50`;
    }
  
    const buttons = card.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = true));
  }
  
  
   
  
  