// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para almacenar la lista 
let ListaAmigos = [];

//implementar una funcion para agregar amigos a la lista
function AgregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();

    if (nombre !== "") {
        ListaAmigos.push(nombre);
        document.getElementById("amigo").value = "";
        actualizarLista();
    }
}
