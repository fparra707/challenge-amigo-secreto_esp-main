// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//------------------------CHALLENGE AMIGO SECRETO ------------------------------------------

//Inicialización de variables
let listaAmigos = [];                       //Array donde se ingresará el listado de amigos 
let listaNumerosGenerados = [];             //Array para los número generados aleatoriamente

//Función para agregar amigos a la lista "listaAmigos"
function agregarAmigo() {
    
    //Se toma el nombre digitado en el cuadro de texto
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;

    //console.log(nombreAmigo);
    
    //Realizamos las siguiente validaciones: Campo vacío?, Solo letras válidas?, se retringe a 35 caracteres

    if(!inputAmigo.checkValidity()) {
        //alert("El campo no es válido.");
        alert("Por favor ingrese un nombre válido");

        //Limpia cuadro de texto
        //document.getElementById("amigo").value = "";
        inputAmigo.value = "";
        inputAmigo.focus();     //Ubica el cursor en el cuadro de texto

    } else {
        //alert("El campo es válido.");

        //Se valida si el nombre ingresado ya se encuentra en el listado
        if(amigoRepetido(nombreAmigo,listaAmigos) == false){

            //Se agrega el nombre al array listaAmigos en la última posición
            listaAmigos.push(nombreAmigo);
            
            //Creamos el elemento (amigo) de la lista
            let amigo = document.createElement("li");
            //amigo.textContent = nombreAmigo;
            amigo.innerHTML = nombreAmigo;
                            
            //Incluimos el elemento (amigo) a la lista
            document.getElementById("listaAmigos").appendChild(amigo);
    
            //Limpia cuadro de texto
            //document.getElementById("amigo").value = "";
            inputAmigo.value = "";
            inputAmigo.focus();     //Ubica el cursor en el cuadro de texto
            
            console.log(listaAmigos);
            console.log(amigo);
        }else{
            alert("El nombre ya se encuentra en el listado");
            inputAmigo.value = "";
            inputAmigo.focus();     //Ubica el cursor en el cuadro de texto
        }           
    }            
}


//Funcion para sortear amigo secreto usando un número aleatorio
function sortearAmigo(){

    //Se valida si hay listado de amigos
    if(listaAmigos.length < 3){
        alert("Deben listarse al menos 3 amigos, por favor ingrese los nombres a sortear");  
        return;
    }

    //Se genere número aleatorio
    let numeroGenerado = Math.floor(Math.random()*listaAmigos.length);  //El número generado señala la posición en el array de listaAmigos
    //console.log(numeroGenerado);
    //console.log(listaAmigos[numeroGenerado]);                         

    //Establecemos la variable resultado de acuerdo al html
    let resultado = document.getElementById("resultado");

    //Mostramos el texto con el amigo secreto seleccionado
    resultado.innerHTML = `El amigo secreto es: ${listaAmigos[numeroGenerado]}`;

    //Limpiamos el listado visualizado en el html
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";    
}


function amigoRepetido(elemento,array){

    //Validar si el nombre ya está en el array
    for(i = 0; i < listaAmigos.length; i++){
        if(elemento === array[i]){
            //alert("El nombre ya se encuentra en el listado");    
            return true;
        }                                    
    }
    return false;
}

//Función para mostrar texto en parrafo seleccionado
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;
}


