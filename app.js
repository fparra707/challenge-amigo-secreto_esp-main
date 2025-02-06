// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//------------------------CHALLENGE AMIGO SECRETO ------------------------------------------

//Inicialización de variables
let listaAmigos = [];                       //Array donde se ingresará el listado de amigos 
let listaNumerosGenerados = [];             //Array para los número generados aleatoriamente

//Función para agregar amigos a la lista "listaAmigos"
function agregarAmigo() {
    
    //Se toma el nombre digitado en el cuadro de texto
    let nombreAmigo = document.getElementById("amigo").value;
    
    //Validamos si el usuario digitó algún nombre
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido");        
    } else{
        //Se agrega el nombre al array listaAmigos en la última posición
        listaAmigos.push(nombreAmigo);

        //Creamos el elemento (amigo) de la lista
        let amigo = document.createElement("li");
        //amigo.textContent = nombreAmigo;
        amigo.innerHTML = nombreAmigo;
        
        
        //Incluimos el elemento (amigo) a la lista
        document.getElementById("listaAmigos").appendChild(amigo);

        //Limpia cuadro de texto
        document.getElementById("amigo").value = "";
        
        console.log(listaAmigos);
        console.log(amigo);    
    }       
}

//Funcion para sortear amigo secreto usando un número aleatorio
function sortearAmigo(){
    //Se genere número aleatorio
    let numeroGenerado = Math.floor(Math.random()*listaAmigos.length);  //El número generado señala la posición en el array de listaAmigos
    //console.log(numeroGenerado);
    //console.log(listaAmigos[numeroGenerado]);                         //Se valida el nombre seleccionado por el número generado

    //Mostramos el texto con el amigo secreto seleccionado
    asignarTextoElemento('p',`El amigo secreto es ${listaAmigos[numeroGenerado]}`);

     //Validamos si se han sorteado todos los amigos
    if (listaNumerosGenerados.length == listaAmigos.length) {
        asignarTextoElemento('p','Ya se sortearon todos los amigos posibles');

    } else {
        //Si el número generado está incluido en la lista
        if (listaNumerosGenerados.includes(numeroGenerado)) {
            return sortearAmigo();     //recursividad (la función se llama a si misma)
        } else {
            listaNumerosGenerados.push(numeroGenerado);            
        }
    }

    console.log(listaNumerosGenerados);

}

//Función para mostrar texto en parrafo seleccionado
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =  texto;
    return;
}

