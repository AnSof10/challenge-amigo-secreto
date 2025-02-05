// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {

    let nombre = document.getElementById('amigo').value;
    
    if (nombre === '') {
        alert('Ingrese un nombre válido.');
    } else {
        amigos.push(nombre)
        console.log(amigos);

         limpiarCaja();
         actualizarListaAmigos();
     }
}

function limpiarCaja() {
    document.getElementById('amigo').value = '';
}

function actualizarListaAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];

        lista.appendChild(elementoLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
    } else {
        let amigoSorteado = Math.floor(Math.random() * amigos.length);
        let amigoSeleccionado = amigos[amigoSorteado];

        document.getElementById('resultado').innerHTML = `<li class="result-list">El amigo secreto sorteado es: ${amigoSeleccionado}.</li>`;

        document.getElementById('listaAmigos').style.display = "none";
    }
}