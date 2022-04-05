/* Declaramos las variables en las que llamaremos a todos los ids, mas declararemos el contador que vamos a usar */
var btnElm = document.getElementById('btnClick'),
    /*btnClear = document.getElementById('btnClear'),*/
    audio1 = document.getElementById("audio1"),
    audio2 = document.getElementById("audio2"),
    scoreElm = document.getElementById('contarScore'),
    pElm = document.getElementById('contarClick'),
    sect = document.getElementById('sect'),
    contar = 0,
    contador = 0;
/* Declaramos una constante sbg con una funcion para generar un color aleatorio y se lo agregamos la variabole "sect" que representa la seccion completa del contenido. */
const sbg = function () {
    const randColor = Math.floor(Math.random() * 16777215).toString(16);
    sect.style.backgroundColor = "#" + randColor;
}
/* introducimos el valor inicial del contador para que no este vacio */
pElm.textContent = 0;
/* agregar el evento onclick para comenzar a contar, cada vez que se haga click en el boton se aumenta el valor de la variable contar, se muestra ese valor en el parrafo, y se ejecuta la funcion sbg() para cambiar el color del fondo. */
btnElm.onclick = function () {
    contar++;
    pElm.textContent = contar;
    sbg();

    if(contar == 20) {
        contador++;
        scoreElm.textContent = contador;
        audioM1();
        btnClear();
        if(contador % 5 == 0) {
            audioM2();
        }
    }
}
/* Para devolver el contador a cero y el fondo a blanco */
const btnClear = function () {
    pElm.textContent = 0;
    contar = 0;
    sect.style.backgroundColor = "white";
}

function audioM1() {
    audio1.play();
}

function audioM2() {
    audio2.play();
}