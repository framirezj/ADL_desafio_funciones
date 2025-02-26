
function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color;
    }

const ele = document.getElementById("ele1")
    ele.addEventListener("click", () => pintar(ele, 'yellow') );


/* Dentro del script agrega el evento para que al hacer click a cada uno de los
divs, este cambie de color al color negro. Utiliza addEventListener para
agregar el evento. (1 Punto) */

const divBlue = document.querySelector('#divBlue');
    divBlue.addEventListener("click", () => console.log("hola"))

const divRed = document.querySelector('#divRed');
    divRed.addEventListener('click', () => console.log("holaa"))

const divGreen = document.querySelector('#divGreen');
    divGreen.addEventListener('click', () => console.log("holaa"))

const divYellow = document.querySelector('#divYellow');
    divYellow.addEventListener('click', () => console.log("holaa"))