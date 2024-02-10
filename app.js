// 

let numeroSecreto = 0;
let intentos = 1;


let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroMaximoIntentos = 3;

// generarNumeroSecreto()

condicionesIniciales();

function asignarTextoElemento(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//document.getElementById es una función para seleccionar el elemento por su clave o ID, predeterminada ya por JS
// el .value nos regresará el valor del parámetro y no el objeto.

function verificarIntento() 
{
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

//la variable que aquí se declara la designa el número que el usuario introduce en el input, . value arroja el valor asbsoluto
//getElementById nos permite seleccionar el elemento por su ID.

        if (numeroDeUsuario === numeroSecreto) 
        { 
            asignarTextoElemento("p",`¡Acertaste el número secreto en ${intentos} ${(intentos > 1) ? "intentos" : "intento"}!`);
            document.getElementById("reiniciar").removeAttribute("disabled");
            limpiarCaja();
            document.getElementById("verificar").setAttribute("disabled", "");
            return;
        }
        else if(numeroDeUsuario > numeroSecreto) 
        {
        //el usuario no acertó
            asignarTextoElemento("p",`¡El número secreto es menor que ${numeroDeUsuario}!`);
            limpiarCaja();        
        }   
        else 
        {
            asignarTextoElemento("p",`¡El número secreto es mayor que ${numeroDeUsuario}!`);
            limpiarCaja();
        }
        
        if (intentos < numeroMaximoIntentos) 
        {
            intentos++;
        }
        
        else 
        {
            asignarTextoElemento("p","Lo siento, has llegado al número máximo de intentos, intenta de nuevo");
            document.getElementById("verificar").setAttribute("disabled", "");
            document.getElementById("reiniciar").removeAttribute("disabled");
            limpiarCaja();
            listaNumerosSorteados = []
        }
    //En el momento en que se reinicia el conteo, y te equivocas dos veces, al tercer intento correcto hace un conteo raro. Revisar
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
        let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
    // si ya sorteamos todos los números:
    if(listaNumerosSorteados.length == numeroMaximo) {
        document.getElementById("verificar").setAttribute("disabled", "");
        asignarTextoElemento("p","Ya se han sorteado todos los números posibles");
        
        

    } else {

    // si el número generado está incluido está en la lista hacemos una operación, si no hacemos otra.
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();

    } else {
        listaNumerosSorteados.push(numeroGenerado);       
        return numeroGenerado;
        
    }

    }   
    
    
    
}

function limpiarCaja() {

   let valorCaja = document.querySelector('#valorUsuario');
   valorCaja.value = "";

}

function condicionesIniciales() {

    asignarTextoElemento("h1","Juego del número secreto!");
    asignarTextoElemento("p",`Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}



   function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();

    //Indicar mensaje de intervalos de números
    condicionesIniciales();
    //activar botón
    document.getElementById("verificar").removeAttribute("disabled");
    document.getElementById("reiniciar").setAttribute("disabled", "");
    //Generar número aleatorio
 
    //Inicializar el número de intentos

    //Deshabilitar el botón de nuevo juego

    
   }
