let tiempo;
let contador = 0;


function inicio() {
    tiempo=window.setInterval(inicioCronometro, 1000);
}
function inicioCronometro() {
    let cronometro = document.getElementById('cronometro');
    cronometro.innerHTML=contador++;
    
}

function detengoCronometro() {
    //let detengo = document.getElementById('cronometro');
    window.clearInterval(tiempo);
}

function limpioCronometro() {
    let limpio=document.getElementById('cronometro');;
    contador=0;
    limpio.innerHTML = contador;
}

let boton_iniciar = document.getElementById('iniciar');
boton_iniciar.addEventListener('click', inicio);
let boton_detener = document.getElementById('detener');
boton_detener.addEventListener('click', detengoCronometro);
let boton_limpiar = document.getElementById('limpiar');
boton_limpiar.addEventListener('click', limpioCronometro);

