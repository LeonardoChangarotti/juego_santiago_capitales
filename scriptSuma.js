
const gameContainer = document.getElementById("game-container"); // Contenedor principal del juego

// Función para generar una nueva pregunta de suma
function generar_preguntaSuma() {
  // Generar dos números aleatorios del 1 al 10
  const num1 = Math.floor(Math.random() * 10) + 1;
  const num2 = Math.floor(Math.random() * 10) + 1;
  const correctAnswer = num1 + num2; // Calcular la respuesta correcta
  
  // Crear la tarjeta de la pregunta
  const questionCard = document.createElement("div");
  questionCard.classList.add("card");
  
  // Agregar la pregunta como título
  const questionText = document.createElement("h3");
  questionText.textContent = `¿Cuánto es ${num1} + ${num2}?`;
  questionCard.appendChild(questionText);

  // Generar opciones de respuesta
  const options = generateOptions(correctAnswer);
  
  // Crear botones para las opciones
  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.addEventListener("click", () => handleAnswer(option.isCorrect, questionCard));
    questionCard.appendChild(button);
  });
  
  gameContainer.appendChild(questionCard); // Agregar la tarjeta al contenedor del juego
}

// Función para generar opciones de respuesta
function generateOptions(correctAnswer) {
  let wrongAnswer1 = correctAnswer + (Math.floor(Math.random() * 5) + 1); // Respuesta incorrecta cercana
  let wrongAnswer2 = correctAnswer - (Math.floor(Math.random() * 5) + 1);
  if (wrongAnswer2 < 0) wrongAnswer2 = correctAnswer + (Math.floor(Math.random() * 5) + 2); // Asegurar que no sea negativa

  // Crear un array con la respuesta correcta e incorrectas
  const options = [
    { text: correctAnswer, isCorrect: true },
    { text: wrongAnswer1, isCorrect: false },
    { text: wrongAnswer2, isCorrect: false }
  ];

  return options.sort(() => Math.random() - 0.5); // Mezclar opciones aleatoriamente
}

// Función para manejar la respuesta del usuario
function handleAnswer(isCorrect, card) {
  if (card.querySelector("p")) return; // Evitar múltiples mensajes

  // Mostrar mensaje de correcto o incorrecto
  const message = document.createElement("p");
  message.textContent = isCorrect ? "¡Correcto! 🎉" : "Incorrecto 😞";
  message.style.color = isCorrect ? "green" : "red";
  card.appendChild(message);

  // Deshabilitar botones después de responder
  const buttons = card.querySelectorAll("button");
  buttons.forEach(button => button.disabled = true);

  // Esperar 2 segundos y generar una nueva pregunta
  setTimeout(() => {
    gameContainer.innerHTML = "";
    generar_preguntaSuma();
  }, 1000);
}

// Generar la primera pregunta al cargar el juego
generar_preguntaSuma();
