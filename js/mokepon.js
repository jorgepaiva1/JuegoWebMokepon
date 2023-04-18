
let ataqueJugador = ''
let ataqueEnemigo = ''
let resultadoAtaque = ''

function iniciarJuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    
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
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = 'Langostelvis'
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = 'Tucapalma'
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = 'Pydos'
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
    if(ataqueJugador == ataqueEnemigo){
        resultadoAtaque = 'Empate 🤝🏻'
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra'){
        resultadoAtaque = 'Ganaste 🎉 '
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua' ){
        resultadoAtaque = 'Ganaste 🎉 '
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego'){
        resultadoAtaque = 'Ganaste 🎉 '
    } else {
        resultadoAtaque = 'Perdiste 😥'
    }

    crearMensaje()
}

function crearMensaje(){

    let seccionMensaje = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con '+ ataqueJugador + ', La mascota del enemigo atacó con ' + ataqueEnemigo + ' - ' + resultadoAtaque 

    seccionMensaje.appendChild(parrafo)
}

function aleatorio(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)

