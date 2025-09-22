// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para almacenar la lista 
let listaAmigos = [];
console.log(listaAmigos);

//implementar una funcion para agregar amigos a la lista
function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    //validar que el nombre no esté en el array y el campo no esté vacío
    if (nombre !== "") {
        if (listaAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");//alerta nombre repetido
        return;
        }
        //agregar el nuevo nombre al array y activar actualizar la lista en html
        listaAmigos.push(nombre);
        document.getElementById("amigo").value = "";
        ActualizarLista();
        console.log(listaAmigos);
        
    } else {
        alert("Por favor, ingresa un nombre válido.");//mostrar alerta campo invalido
    }
}

function ActualizarLista(){
    let listaHtml = document.getElementById("listaAmigos");
    listaHtml.innerHTML = ""; // limpiar lista antes de recrearla, evita duplicados
    for (let amigo of listaAmigos){
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent = amigo;
        listaHtml.appendChild(nuevaLista);
    }
}

// La nueva función para sortear un amigo
function sortearAmigo() {
    //Validar que el array no esté vacío
    if (listaAmigos.length === 0){
        alert('¡no hay amigos en la lista para sortear!');
        return; 
    }
    //generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    //obtener el nombre sorteado
    let amigoSorteado = listaAmigos [indiceAleatorio];

    //Mostrar el resultado
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `¡El amigo sorteado es: <b>${amigoSorteado}</b>!`;
    console.log(`Sorteando... ¡El ganador es: ${amigoSorteado}!`);
}