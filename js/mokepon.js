const sectionReiniciar = document.getElementById('reiniciar')
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const botonMascotaJugador = document.getElementById('boton-mascota') //a la variable le asigna el elemento con el id correspondiente del html
const botonFuego = document.getElementById('boton-fuego')
const botonTierra = document.getElementById('boton-tierra')
const botonAgua = document.getElementById('boton-agua')
const botonReiniciar = document.getElementById('boton-reiniciar')


const inputHipodoge = document.getElementById('hipodoge')
const inputCapipepo = document.getElementById('capipepo')
const inputRatigueya = document.getElementById('ratigueya')
const inputLangostelvis = document.getElementById('langostelvis')
const inputTucapalma = document.getElementById('tucapalma')
const inputPydos = document.getElementById('pydos')
const spanMascotaJugador = document.getElementById('mascota-jugador')


const spanMascotaEnemigo = document.getElementById('mascota-enemigo')

const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')


const spanVidaJugador = document.getElementById('vida-jugador')
const spanVidaEnemigo = document.getElementById('vida-enemigo')


const seccionMensajes = document.getElementById('resultado')
const ataquesDelJugador = document.getElementById('ataque-actual-jugador')
const ataquesDelJugadorAnterior = document.getElementById('ataque-anterior-jugador')
const ataquesDelEnemigo = document.getElementById('ataque-actual-enemigo')
const ataquesDelEnemigoAnterior = document.getElementById('ataque-anterior-enemigo')

const seccionMensaje = document.getElementById('resultado')


let ataqueJugador = '...'
let ataqueJugadorAnterior = ''
let ataqueEnemigo = '...'
let ataqueEnemigoAnterior = ''
let resultadoAtaque = ''
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){

    sectionSeleccionarAtaque.style.display = 'none' //oculta la seccion 
    sectionReiniciar.style.display = 'none'
    
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) //espera una llamada (click) y ejecuta la funcion que se le indica cuando pasa lo que se requiere

    botonFuego.addEventListener('click', ataqueFuego) 
    botonTierra.addEventListener('click', ataqueTierra)
    botonAgua.addEventListener('click', ataqueAgua)
    
    botonReiniciar.addEventListener('click', reiniciarJuego) 
}

function seleccionarMascotaJugador(){
  
    if(inputHipodoge.checked){
        spanMascotaJugador.innerHTML = 'Hipodoge'
        comenzarAtaque()
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
        comenzarAtaque()
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
        comenzarAtaque()
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
        comenzarAtaque()
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
        comenzarAtaque()
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
        comenzarAtaque()
    } else {
        alert('No seleccionaste a ningun Mokepon!!')
    }
    
    seleccionarMascotaEnemigo()
}



function seleccionarMascotaEnemigo(){
    let enemigo = aleatorio(1,6)
        
    if (enemigo==1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (enemigo==2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else if (enemigo==3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    } else if (enemigo==4){
        spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if (enemigo==5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else if (enemigo==6){
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
}

function comenzarAtaque(){
    sectionSeleccionarAtaque.style.display = 'flex'
    
    sectionSeleccionarMascota.style.display = 'none'
}

function ataqueFuego(){
    ataqueJugadorAnterior= ataqueJugador
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugadorAnterior= ataqueJugador
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugadorAnterior= ataqueJugador
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let numeroAtaqueEnemigo = aleatorio(1,3)
    ataqueEnemigoAnterior= ataqueEnemigo

    if(numeroAtaqueEnemigo == 1){
        ataqueEnemigo = 'Fuego' 
    } else if(numeroAtaqueEnemigo == 2){
        ataqueEnemigo = 'Tierra' 
    } else{
        ataqueEnemigo = 'Agua' 
    }

    combate()
}


function combate(){
  
    if(ataqueJugador == ataqueEnemigo){
        resultadoAtaque = 'Empate 🤝🏻'
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        resultadoAtaque = 'Ganaste 🎉 '
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua' ){
        resultadoAtaque = 'Ganaste 🎉 '
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        resultadoAtaque = 'Ganaste 🎉 '
        vidasEnemigo--
        spanVidaEnemigo.innerHTML = vidasEnemigo
    } else {
        resultadoAtaque = 'Perdiste 😥'
        vidasJugador--
        spanVidaJugador.innerHTML = vidasJugador
    }

    crearMensaje()

    revisarVidas()
}


function crearMensaje(){

    seccionMensajes.innerHTML = resultadoAtaque
    ataquesDelJugador.innerHTML = ataqueJugador
    ataquesDelJugadorAnterior.innerHTML = ataqueJugadorAnterior
    ataquesDelEnemigo.innerHTML = ataqueEnemigo
    ataquesDelEnemigoAnterior.innerHTML = ataqueEnemigoAnterior

    //cambiar color segun ataque del jugador
    if(ataqueJugador=="Fuego"){
        ataquesDelJugador.style.color ="red"
    }else if (ataqueJugador == "Agua"){
        ataquesDelJugador.style.color = "skyblue"
    }else if (ataqueJugador == "Tierra"){
        ataquesDelJugador.style.color = "#B8621B"
    }

    if(ataqueJugadorAnterior=="Fuego"){
        ataquesDelJugadorAnterior.style.color ="red"
    }else if (ataqueJugadorAnterior == "Agua"){
        ataquesDelJugadorAnterior.style.color = "skyblue"
    }else if (ataqueJugadorAnterior == "Tierra"){
        ataquesDelJugadorAnterior.style.color = "#B8621B"
    }

    //cambiar color segun ataque del enemigo
    if(ataqueEnemigo=="Fuego"){
        ataquesDelEnemigo.style.color ="red"
    }else if (ataqueEnemigo == "Agua"){
        ataquesDelEnemigo.style.color = "skyblue"
    }else if (ataqueEnemigo == "Tierra"){
        ataquesDelEnemigo.style.color = "#B8621B"
    }
    
    if(ataqueEnemigoAnterior=="Fuego"){
        ataquesDelEnemigoAnterior.style.color ="red"
    }else if (ataqueEnemigoAnterior == "Agua"){
        ataquesDelEnemigoAnterior.style.color = "skyblue"
    }else if (ataqueEnemigoAnterior == "Tierra"){
        ataquesDelEnemigoAnterior.style.color = "#B8621B"
    }
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("Derrotaste al enemigo, Felicidades!!! Ganaste!!!! 😎🎉")
    } else if (vidasJugador==0){
        crearMensajeFinal('El enemigo te derroto, Perdistee 😓❌')
    }
}

function crearMensajeFinal(resultado){

    seccionMensaje.innerHTML = resultado

    botonFuego.disabled = true 
    botonTierra.disabled = true
    botonAgua.disabled = true 

    //aparecer boton reiniciar
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload() //reiniciar recargando la pagina
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)
