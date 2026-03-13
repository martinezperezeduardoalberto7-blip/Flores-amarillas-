// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Y si de pronto me acelero", time: 03 },
  { text: "Y te repito que te quiero", time: 09 },
  { text: "Es verdad", time: 13},
  { text: "Que si en tu piel sobra consuelo", time: 16 },
  { text: "¿Para qué quiero ir al cielo?", time: 20 },
  { text: "Es verdad", time: 25 },
  { text: "Sé que eres tú", time: 28 },
  { text: "En esta y mil realidades", time: 30 },
  { text: "Eres cauce de luz", time: 33 },
  { text: "Río de casualidades", time: 36 },
  { text: "No quisiera explicarte", time: 39 },
  { text: "Sólo sé que al mirarte", time: 41 },
  { text: "Simplemente es verdad ", time: 45 },
  { text: "¿Que si tus ojos son la huellas", time: 72 },
  { text: "Quе la eternidad destеlla", time: 77 },
  { text: "Es verdad", time: 80 },
  { text: "Eres acción y mi motivo", time: 84 },
  { text: "Eres amor definitivo", time: 88 },
  { text: "Eres la verdad", time: 93 },
  { text: "Sé que eres tú en ésta y mil realidades", time: 96 },
  { text: "Eres cauce de luz, río de casualidades", time: 101 },
  { text: "No quisiera explicarte, solo sé que al mirarte", time: 106 },
  { text: "Simplemente es verdad", time: 112 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
