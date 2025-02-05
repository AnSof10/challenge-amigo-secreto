// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    let nombre = document.getElementById('amigo').value; // Obtenemos el valor del input
    
    if (nombre === '') { // Si el campo está vacío
        alert('Ingrese un nombre válido.');
    } else { // Si el campo tiene un valor
        amigos.push(nombre)
        /* console.log(amigos);*/

         limpiarCaja();
         actualizarListaAmigos();
     }
}

function limpiarCaja() {
    document.getElementById('amigo').value = ''; // Limpiamos el input
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos'); // Obtenemos el elemento ul
    lista.innerHTML = ''; // Limpiamos la lista

    for (let i = 0; i < amigos.length; i++) { // Recorremos el array de amigos
        let elementoLista = document.createElement('li'); // Creamos un elemento li
        elementoLista.textContent = amigos[i]; // Agregamos el nombre del amigo al elemento li

        lista.appendChild(elementoLista); // Agregamos el elemento li a la lista ul
    }
}

function sortearAmigo() {
    if (amigos.length === 0) { // Si no hay amigos en la lista
        alert("No hay amigos en la lista para sortear."); // Mostramos un mensaje de alerta (extra)
    } else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length); // Sorteamos un número aleatorio
        let amigoSeleccionado = amigos[amigoSorteado]; // Seleccionamos el amigo correspondiente al número sorteado

        document.getElementById('resultado').innerHTML = `<li class="result-list">El amigo secreto sorteado es: ${amigoSeleccionado}.</li>`; // Mostramos el amigo seleccionado

        document.getElementById('listaAmigos').style.display = "none"; // Ocultamos la lista de amigos
    }
}