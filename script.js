/* ==========================================
   PROYECTO OPERACIÓN 47
   script.js
========================================== */

// -----------------------------
// Pantallas
// -----------------------------

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");
const screen4 = document.getElementById("screen4");

// -----------------------------
// Botones
// -----------------------------

const btnStart = document.getElementById("btnStart");
const btnMission = document.getElementById("btnMission");
const btnAccept = document.getElementById("btnAccept");

// -----------------------------
// Terminal
// -----------------------------

const terminal = document.getElementById("terminalText");

btnStart.style.display = "none";

// -----------------------------
// Texto de la terminal
// -----------------------------

const mensajes = [

"Inicializando protocolo del Proyecto Operación 47...",

"Comprobando integridad del sistema...",

"Estableciendo conexión cifrada...",

"Descargando credenciales...",

"Verificando identidad del agente...",

"",

"✔ Identidad confirmada.",

"",

">>> AGENTE DONDI",

">>> NIVEL DE ACCESO 47",

">>> CLASIFICACIÓN ALTO SECRETO",

"",

"ACCESO AUTORIZADO"

];

// -----------------------------
// Escribir texto
// -----------------------------

let lineaActual = 0;

function escribirLinea() {

    if (lineaActual >= mensajes.length) {

        btnStart.style.display = "block";

        btnStart.style.opacity = "0";

        setTimeout(() => {

            btnStart.style.transition = ".8s";

            btnStart.style.opacity = "1";

        },100);

        return;

    }

    const p = document.createElement("p");

    terminal.appendChild(p);

    let texto = mensajes[lineaActual];

    let letra = 0;

    const intervalo = setInterval(()=>{

        p.innerHTML = texto.substring(0,letra) + "<span class='cursor'>█</span>";
        letra++;
p.innerHTML = texto;
        if(letra > texto.length){

            clearInterval(intervalo);

            lineaActual++;

            setTimeout(escribirLinea,350);

        }

    },35);

}

// -----------------------------
// Mostrar pantallas
// -----------------------------

function mostrarPantalla(pantalla){

    document.querySelectorAll(".screen").forEach(sec=>{

        sec.classList.remove("active");

    });

    pantalla.classList.add("active");

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}

// -----------------------------
// Eventos botones
// -----------------------------

btnStart.addEventListener("click",()=>{

    mostrarPantalla(screen2);

});

btnMission.addEventListener("click",()=>{

    mostrarPantalla(screen3);

});

btnAccept.addEventListener("click",()=>{

    mostrarPantalla(screen4);

});

// -----------------------------
// Inicio
// -----------------------------

window.addEventListener("load",()=>{

    terminal.innerHTML="";

    setTimeout(()=>{

        escribirLinea();

    },700);

});
