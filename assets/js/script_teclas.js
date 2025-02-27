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

/* Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
deberá crear un div nuevo de las mismas dimensiones antes mencionadas
con los colores morado, gris y café respectivamente. (1 Punto */


const color = (letra) => {

    const divKey = document.querySelector('#key');
    const divKeyOC = document.querySelector('#keyOtrosColores');
    
    if (letra === 'a') {
        divKey.style.backgroundColor = "pink";
    } else if (letra === 's') {
        divKey.style.backgroundColor = "orange";
    } else if (letra === 'd') {
        divKey.style.backgroundColor = "skyblue";
    }else if (letra === 'q') {
        divKeyOC.style.backgroundColor = "violet";
    }else if (letra === 'w') {
        divKeyOC.style.backgroundColor = "gray";
    }else if (letra === 'e') {
        divKeyOC.style.backgroundColor = "brown";
    }

}


document.addEventListener('keydown', (event) => color(event.key))
