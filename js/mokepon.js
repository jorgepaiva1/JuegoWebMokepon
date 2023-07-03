
let ataqueJugador = '...'
let ataqueJugadorAnterior = ''
let ataqueEnemigo = '...'
let ataqueEnemigoAnterior = ''
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

    let seccionMensajes = document.getElementById('resultado')
    let ataquesDelJugador = document.getElementById('ataque-actual-jugador')
    let ataquesDelJugadorAnterior = document.getElementById('ataque-anterior-jugador')
    let ataquesDelEnemigo = document.getElementById('ataque-actual-enemigo')
    let ataquesDelEnemigoAnterior = document.getElementById('ataque-anterior-enemigo')
/*
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
*/
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
/*
    nuevoAtaqueJugador.innerHTML = ataqueJugador
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueEnemigo)
*/
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("Derrotaste al enemigo, Felicidades!!! Ganaste!!!! 😎🎉")
    } else if (vidasJugador==0){
        crearMensajeFinal('El enemigo te derroto, Perdistee 😓❌')
    }
}

function crearMensajeFinal(resultado){

    let seccionMensaje = document.getElementById('resultado')
    seccionMensaje.innerHTML = resultado

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
