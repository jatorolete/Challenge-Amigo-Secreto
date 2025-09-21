// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para almacenar la lista 
let ListaAmigos = [];
console.log(ListaAmigos);

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
    console.log(ListaAmigos);
    if (nombre !== "" && !ListaAmigos.includes(nombre)) {
        ListaAmigos.push(nombre);
        document.getElementById("amigo").value = "";
    } else {
        alert('Por favor ingrese un nombre válido');
    }

}

/*
function ActualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    if (ListaAmigos.length === 0) {
        alert("Por favor, agrega amigos a la lista.");
    } else {
        ListaAmigos.forEach(function(amigo) {
            let item = document.createElement("li");
            item.textContent = amigo;
            lista.appendChild(item);
        });
    }
} */
