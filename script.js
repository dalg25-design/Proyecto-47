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

"Inicializando protocolo...",

"Conectando con servidor seguro...",

"Verificando credenciales...",

"Accediendo a base de datos...",

"Buscando agente especializado...",

"",

"Coincidencia encontrada.",

"",

">>> AGENTE DONDI",

">>> NIVEL 47",

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

        p.textContent = texto.substring(0,letra);

        letra++;

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
