const gameContainer = document.getElementById("game-container"); // Contenedor principal del juego

// Función para generar una nueva pregunta de resta
function generar_preguntaResta() {
  // Generar dos números aleatorios del 1 al 10 y asegurarse de que num1 >= num2
  const num1 = Math.floor(Math.random() * 10) + 1; // Número mayor
  const num2 = Math.floor(Math.random() * num1) + 1; // Número menor o igual a num1 para evitar resultados negativos
  const correctAnswer = num1 - num2; // Calcular la respuesta correcta
  
  // Crear la tarjeta de la pregunta
  const questionCard = document.createElement("div");
  questionCard.classList.add("card"); // Agregar una clase para estilos
  
  // Agregar la pregunta como título
  const questionText = document.createElement("h3");
  questionText.textContent = `¿Cuánto es ${num1} - ${num2}?`; // Mostrar la operación
  questionCard.appendChild(questionText);

  // Generar opciones de respuesta
  const options = generateOptions(correctAnswer);
  
  // Crear botones para las opciones de respuesta
  options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text; // Mostrar el valor de la opción
    button.addEventListener("click", () => handleAnswer(option.isCorrect, questionCard)); // Manejar clic en la opción
    questionCard.appendChild(button); // Agregar botón a la tarjeta
  });
  
  gameContainer.appendChild(questionCard); // Agregar la tarjeta al contenedor del juego
}

// Función para generar opciones de respuesta sin valores negativos
function generateOptions(correctAnswer) {
  // Generar respuestas incorrectas sumando un número aleatorio positivo
  let wrongAnswer1 = correctAnswer + (Math.floor(Math.random() * 5) + 1);
  let wrongAnswer2 = correctAnswer + (Math.floor(Math.random() * 5) + 1); // Sumar valores para evitar negativos
  
  // Crear un array con la respuesta correcta e incorrectas
  const options = [
    { text: correctAnswer, isCorrect: true }, // Respuesta correcta
    { text: wrongAnswer1, isCorrect: false }, // Respuesta incorrecta 1
    { text: wrongAnswer2, isCorrect: false }  // Respuesta incorrecta 2
  ];

  return options.sort(() => Math.random() - 0.5); // Mezclar opciones aleatoriamente
}

// Función para manejar la respuesta del usuario
function handleAnswer(isCorrect, card) {
  if (card.querySelector("p")) return; // Evitar que se muestre el mensaje varias veces

  // Crear un mensaje de correcto o incorrecto
  const message = document.createElement("p");
  message.textContent = isCorrect ? "¡Correcto! 🎉" : "Incorrecto 😞"; // Mensaje según la respuesta
  message.style.color = isCorrect ? "green" : "red"; // Color verde si es correcto, rojo si es incorrecto
  card.appendChild(message);

  // Deshabilitar botones después de responder
  const buttons = card.querySelectorAll("button");
  buttons.forEach(button => button.disabled = true);

  // Esperar 2 segundos y generar una nueva pregunta
  setTimeout(() => {
    gameContainer.innerHTML = ""; // Limpiar el contenedor
    generar_preguntaResta(); // Generar una nueva pregunta
  }, 1000);
}

// Generar la primera pregunta al cargar el juego
generar_preguntaResta();
