
let ataqueJugador = ''
let ataqueEnemigo = ''
let resultadoAtaque = ''
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarJuego(){

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none' //oculta la seccion 
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

    let botonMascotaJugador = document.getElementById('boton-mascota') //a la variable le asigna el elemento con el id correspondiente del html
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador) //espera una llamada (click) y ejecuta la funcion que se le indica cuando pasa lo que se requiere

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego) 

}

function seleccionarMascotaJugador(){

    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let inputLangostelvis = document.getElementById('langostelvis')
    let inputTucapalma = document.getElementById('tucapalma')
    let inputPydos = document.getElementById('pydos')

    let spanMascotaJugador = document.getElementById('mascota-jugador')
    

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
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    
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
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
}

function ataqueFuego(){
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let numeroAtaqueEnemigo = aleatorio(1,3)

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
    let spanVidaJugador = document.getElementById('vida-jugador')
    let spanVidaEnemigo = document.getElementById('vida-enemigo')
    
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

    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ ataqueJugador + ', La mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultadoAtaque 

    seccionMensaje.appendChild(parrafo)
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("Derrotaste al enemigo, Felicidades!!! Ganaste!!!! 😎🎉")
    } else if (vidasJugador==0){
        crearMensajeFinal('El enemigo te derroto, Perdistee 😓❌')
    }
}

function crearMensajeFinal(resultado){

    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultado

    seccionMensaje.appendChild(parrafo)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true 
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true 

    //aparecer boton reiniciar
    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego(){
    location.reload() //reiniciar recargando la pagina
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

