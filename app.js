// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para almacenar la lista 
let ListaAmigos = [];
console.log(ListaAmigos);

//implementar una funcion para agregar amigos a la lista
function AgregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
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