const gameContainer = document.getElementById("game-container");

let score = 0; // Contador de respuestas correctas
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.textContent = `Aciertos: ${score} de 60`;
  document.body.insertBefore(scoreDisplay, gameContainer);


  const countries = [
    { name: "Venezuela", correctCapital: "Caracas", wrongCapital: "Maracaibo", flag: "flags/venezuela.png" },
    { name: "Ucrania", correctCapital: "Kiev", wrongCapital: "Odesa", flag: "flags/ucrania.png" },
    { name: "Bélgica", correctCapital: "Bruselas", wrongCapital: "Amberes", flag: "flags/belgica.png" },
    { name: "Países Bajos", correctCapital: "Ámsterdam", wrongCapital: "Róterdam", flag: "flags/paises_bajos.png" },
    { name: "Argentina", correctCapital: "Buenos Aires", wrongCapital: "Córdoba", flag: "flags/argentina.png" },
    { name: "Francia", correctCapital: "París", wrongCapital: "Lyon", flag: "flags/francia.png" },
    { name: "Brasil", correctCapital: "Brasilia", wrongCapital: "Sao Paulo", flag: "flags/brasil.png" },
    { name: "Chile", correctCapital: "Santiago", wrongCapital: "Valparaíso", flag: "flags/chile.png" },
    { name: "Arabia Saudita", correctCapital: "Riad", wrongCapital: "Yeda", flag: "flags/arabia_saudita.png" },
    { name: "Irán", correctCapital: "Teherán", wrongCapital: "Isfahán", flag: "flags/iran.png" },
    { name: "Colombia", correctCapital: "Bogotá", wrongCapital: "Medellín", flag: "flags/colombia.png" },
    { name: "Ecuador", correctCapital: "Quito", wrongCapital: "Guayaquil", flag: "flags/ecuador.png" },
    { name: "Marruecos", correctCapital: "Rabat", wrongCapital: "Casablanca", flag: "flags/marruecos.png" },
    { name: "Kazajistán", correctCapital: "Astana", wrongCapital: "Almatý", flag: "flags/kazajistan.png" },
    { name: "Jamaica", correctCapital: "Kingston", wrongCapital: "Montego Bay", flag: "flags/jamaica.png" },
    { name: "México", correctCapital: "Ciudad de México", wrongCapital: "Guadalajara", flag: "flags/mexico.png" },
    { name: "Perú", correctCapital: "Lima", wrongCapital: "Arequipa", flag: "flags/peru.png" },
    { name: "Uruguay", correctCapital: "Montevideo", wrongCapital: "Punta del Este", flag: "flags/uruguay.png" },
    { name: "Paraguay", correctCapital: "Asunción", wrongCapital: "Ciudad del Este", flag: "flags/paraguay.png" },
    { name: "Bolivia", correctCapital: "Sucre", wrongCapital: "Santa Cruz", flag: "flags/bolivia.png" },
    { name: "Italia", correctCapital: "Roma", wrongCapital: "Milán", flag: "flags/italia.png" },
    { name: "España", correctCapital: "Madrid", wrongCapital: "Barcelona", flag: "flags/espana.png" },
    { name: "Portugal", correctCapital: "Lisboa", wrongCapital: "Oporto", flag: "flags/portugal.png" },
    { name: "Alemania", correctCapital: "Berlín", wrongCapital: "Hamburgo", flag: "flags/alemania.png" },
    { name: "Austria", correctCapital: "Viena", wrongCapital: "Salzburgo", flag: "flags/austria.png" },
    { name: "Reino Unido", correctCapital: "Londres", wrongCapital: "Manchester", flag: "flags/reino_unido.png" },
    { name: "Irlanda", correctCapital: "Dublín", wrongCapital: "Cork", flag: "flags/irlanda.png" },
    { name: "Rusia", correctCapital: "Moscú", wrongCapital: "San Petersburgo", flag: "flags/rusia.png" },
    { name: "China", correctCapital: "Pekín", wrongCapital: "Shanghái", flag: "flags/china.png" },
    { name: "Japón", correctCapital: "Tokio", wrongCapital: "Osaka", flag: "flags/japon.png" },
    { name: "Corea del Sur", correctCapital: "Seúl", wrongCapital: "Busan", flag: "flags/corea_del_sur.png" },
    { name: "India", correctCapital: "Nueva Delhi", wrongCapital: "Bombay", flag: "flags/india.png" },
    { name: "Australia", correctCapital: "Canberra", wrongCapital: "Sídney", flag: "flags/australia.png" },
    { name: "Egipto", correctCapital: "El Cairo", wrongCapital: "Alejandría", flag: "flags/egipto.png" },
    { name: "Sudáfrica", correctCapital: "Pretoria", wrongCapital: "Johannesburgo", flag: "flags/sudafrica.png" },
    { name: "Nigeria", correctCapital: "Abuja", wrongCapital: "Lagos", flag: "flags/nigeria.png" },
    { name: "Canadá", correctCapital: "Ottawa", wrongCapital: "Toronto", flag: "flags/canada.png" },
    { name: "Estados Unidos", correctCapital: "Washington D.C.", wrongCapital: "Los Ángeles", flag: "flags/estados_unidos.png" },
    { name: "Cuba", correctCapital: "La Habana", wrongCapital: "Santiago de Cuba", flag: "flags/cuba.png" },
    { name: "Panamá", correctCapital: "Ciudad de Panamá", wrongCapital: "Colón", flag: "flags/panama.png" },
    { name: "Costa Rica", correctCapital: "San José", wrongCapital: "Limón", flag: "flags/costa_rica.png" },
    { name: "Honduras", correctCapital: "Tegucigalpa", wrongCapital: "San Pedro Sula", flag: "flags/honduras.png" },
    { name: "El Salvador", correctCapital: "San Salvador", wrongCapital: "Santa Ana", flag: "flags/el_salvador.png" },
    { name: "Guatemala", correctCapital: "Ciudad de Guatemala", wrongCapital: "Quetzaltenango", flag: "flags/guatemala.png" },
    { name: "Noruega", correctCapital: "Oslo", wrongCapital: "Bergen", flag: "flags/noruega.png" },
    { name: "Suecia", correctCapital: "Estocolmo", wrongCapital: "Gotemburgo", flag: "flags/suecia.png" },
    { name: "Finlandia", correctCapital: "Helsinki", wrongCapital: "Tampere", flag: "flags/finlandia.png" },
    { name: "Dinamarca", correctCapital: "Copenhague", wrongCapital: "Aarhus", flag: "flags/dinamarca.png" },
    { name: "Islandia", correctCapital: "Reikiavik", wrongCapital: "Akureyri", flag: "flags/islandia.png" },
    { name: "Turquía", correctCapital: "Ankara", wrongCapital: "Estambul", flag: "flags/turquia.png" },
    { name: "Grecia", correctCapital: "Atenas", wrongCapital: "Salónica", flag: "flags/grecia.png" },
    { name: "Polonia", correctCapital: "Varsovia", wrongCapital: "Cracovia", flag: "flags/polonia.png" },
    { name: "Hungría", correctCapital: "Budapest", wrongCapital: "Debrecen", flag: "flags/hungria.png" },
    { name: "Filipinas", correctCapital: "Manila", wrongCapital: "Cebú", flag: "flags/filipinas.png" },
    { name: "Vietnam", correctCapital: "Hanói", wrongCapital: "Ho Chi Minh", flag: "flags/vietnam.png" },
    { name: "Tailandia", correctCapital: "Bangkok", wrongCapital: "Chiang Mai", flag: "flags/tailandia.png" },
    { name: "Malasia", correctCapital: "Kuala Lumpur", wrongCapital: "George Town", flag: "flags/malasia.png" },
    { name: "Pakistán", correctCapital: "Islamabad", wrongCapital: "Karachi", flag: "flags/pakistan.png" },
    { name: "Bangladés", correctCapital: "Daca", wrongCapital: "Chittagong", flag: "flags/banglades.png" },
    { name: "Nueva Zelanda", correctCapital: "Wellington", wrongCapital: "Auckland", flag: "flags/nueva_zelanda.png" }
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
    message.textContent = isCorrect ? "¡SIII, ES CORRECTO! 😁😎" : "Nooo! incorrecto...😭😓";
    message.style.color = isCorrect ? "green" : "red";
    card.appendChild(message);
  
    if (isCorrect) {
      score++;
      scoreDisplay.textContent = `Aciertos: ${score} de 60`;
    }
  
    const buttons = card.querySelectorAll("button");
    buttons.forEach((button) => (button.disabled = true));
  }
  
  
   
  
  