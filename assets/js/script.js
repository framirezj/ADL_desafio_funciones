
function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color;
    }

const ele = document.getElementById("ele1")
    ele.addEventListener("click", () => pintar(ele, 'yellow') );


/* Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento. (1 Punto) */


const colorBlack = (elemento) => elemento.style.backgroundColor = "black"; 

const divBlue = document.querySelector('#divBlue');
    divBlue.addEventListener("click", () => colorBlack(divBlue))

const divRed = document.querySelector('#divRed');
    divRed.addEventListener('click', () => colorBlack(divRed))

const divGreen = document.querySelector('#divGreen');
    divGreen.addEventListener('click', () => colorBlack(divGreen))

const divYellow = document.querySelector('#divYellow');
    divYellow.addEventListener('click', () => colorBlack(divYellow))


/* Crea una página junto a un script que guarde dentro de una variable global
un color dependiendo de la letra del teclado presionada. (2 Puntos).
○ La letra a guardará el color rosado.
○ La letra s guardará el color naranjo.
○ La letra d guardará el color celeste.
○ Para guardar el color revisa el tip al final del enunciado.
○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
color blanco y borde negro.
○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
“key” a rosado, naranjo o celeste respectivamente */

