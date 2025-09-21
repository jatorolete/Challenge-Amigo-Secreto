// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para almacenar la lista 
let ListaAmigos = [];

//implementar una funcion para agregar amigos a la lista
function AgregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre !== "") {
        //validar que el nombre no esté en el array y el campo no esté vacío
        if (ListaAmigos.includes(nombre)) {
        alert("Ese nombre ya está en la lista.");//alerta nombre repetido
        return;
        }
        //agregar el nuevo nombre al array y activar actualizar la lista en html
        ListaAmigos.push(nombre);
        document.getElementById("amigo").value = "";
        ActualizarLista();
        console.log(ListaAmigos);
        
    } else {
        alert("Por favor, ingresa un nombre válido.");//mostrar alerta campo invalido
    }
}

function ActualizarLista() {
    let listaHTML = document.getElementById("lista-amigos");
    listaHTML.innerHTML = "";
    for (let amigo of ListaAmigos) {
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent = amigo;
        listaHTML.appendChild(nuevaLista);
    }
}

