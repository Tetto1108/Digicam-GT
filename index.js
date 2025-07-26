// === Frases posibles para mostrar aleatoriamente (predominan las del primer bloque) ===
const frases = [
  "5MP de pura nostalgia digital",
  "Cuando el CCD tenía más alma que los megapíxeles",
  "120 MP o simplemente 5MP",
  "El auténtico #nofilter era tener una Coolpix",
  "¿Recuerdas el sonido del obturador digital?",
  "VHS O SD ",
  "Fotografía slow-tech en la era hiperdigital",
  "Toj mire esta en mi pagina hola jajaja pongame 100 me desbele haciendo solo la intro ",
  "¿Recuerdas a las Cybershoot, Coolpix , Easyshare, Power shot .....?",
];

// === Elementos del DOM ===
const titleText = document.getElementById("titleText");
const slideshow = document.getElementById("slideshow");
const btn = document.getElementById("btnContainer");

// === Mostrar frase aleatoria ===
function mostrarFraseAleatoria() {
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  titleText.innerText = fraseAleatoria;
}
mostrarFraseAleatoria();

// === Slideshow ===
const imagenes = ['Handy.jpg', 'JVC.jpg', 'maxresdefault.jpg',  'sddefault.jpg', '2583685735.jpg'];
let index = 0;

function cambiarImagen() {
  slideshow.style.backgroundImage = `url(${imagenes[index]})`;
  index = (index + 1) % imagenes.length;
}
cambiarImagen();
setInterval(cambiarImagen, 5000);

// === Mostrar botón con animación tras 2 segundos ===
setTimeout(() => {
  btn.classList.add('show');
  btn.style.display = 'block';
  btn.style.animation = 'fadeInLento 6s ease forwards';
}, 2000);

// === Limpieza de consola y llamada a Splitting() ===
console.clear();
Splitting();
