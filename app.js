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


//función para sortear un amigo 
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
    listaAmigos.splice(indiceAleatorio, 1); // Eliminar el amigo sorteado de la lista para evitar que se dupliquen

    //Mostrar el resultado
    let elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = `¡El amigo sorteado es: <b>${amigoSorteado}</b>!`;
    ActualizarLista();
    console.log(`Sorteando... ¡El ganador es: ${amigoSorteado}!`);

}

//la nueva funcion para sortear amigo con reinicio 
/* al hacer el juego nuevo si el primer nombre esta vacio vuelve a reiniciar el juego y
no arroja el alert de casilla vacia*/
/*
function sortearAmigo() {
  let elementoResultado = document.getElementById("resultado");

  if (listaAmigos.length === 0) {
    elementoResultado.innerHTML = "Ya no quedan amigos por sortear. ¡Reiniciando el juego!";
    
    // Reiniciar el juego después de 3 segundos
    setTimeout(() => {
      listaAmigos = [];
      ActualizarLista();
      elementoResultado.innerHTML = ""; // Limpiar el mensaje
    }, 3000);

    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  let amigoSorteado = listaAmigos[indiceAleatorio];

  // Eliminar el amigo sorteado del array
  listaAmigos.splice(indiceAleatorio, 1);

  // Mostrar el resultado
  elementoResultado.innerHTML = `¡El amigo sorteado es: <b>${amigoSorteado}</b>!`;

  // Actualizar la lista visual
  ActualizarLista();

  console.log(`Sorteando... ¡El ganador es: ${amigoSorteado}!`);
}
*/