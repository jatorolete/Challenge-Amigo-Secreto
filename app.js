// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//crear un array para almacenar la lista 
let ListaAmigos = [];
console.log(ListaAmigos);

//implementar una funcion para agregar amigos a la lista
function AgregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    //validar que el nombre no esté en el array y el campo no esté vacío
    if (nombre !== "") {
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

function ActualizarLista(){
    let listaHtml = document.getElementById("lista-amigos");
    listaHtml.innerHTML = ""; // limpiar lista antes de recrearla, evita duplicados
    for (let amigo of ListaAmigos){
        let nuevaLista = document.createElement("li");
        nuevaLista.textContent = amigo;
        listaHtml.appendChild(nuevaLista);
    }
}

//validacion de la lista de amigos
if (ListaAmigos.length === 0) {
    alert("Por favor, agrega amigos a la lista.");
} else {
    ActualizarLista();
}

// La nueva función para sortear un amigo
function SortearAmigo() {
  //Validar que el array no esté vacío
  if (ListaAmigos.length === 0) {
    alert("¡No hay amigos en la lista para sortear!");
    return; // Salgo de la función si no hay amigos
  }

//Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * ListaAmigos.length);
//Obtener el nombre sorteado
  const amigoSorteado = ListaAmigos[indiceAleatorio];
//Mostrar el resultado
  const elementoResultado = document.getElementById("resultado");
  elementoResultado.innerHTML = `¡El amigo sorteado es: <b>${amigoSorteado}</b>!`;

  console.log(`Sorteando... ¡El ganador es: ${amigoSorteado}!`);


/*codigo de prueba no funcional
//generar un indice aleatorio para asignar el amigo secreto
function AsignarAmigoSecreto() {
    if (ListaAmigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos a la lista.");
        return;
    }

    // Asignar amigos secretos
    let amigosSecretos = {};
    let indices = Array.from(Array(ListaAmigos.length).keys());
    for (let i = 0; i < ListaAmigos.length; i++) {
        let amigoIndex = Math.floor(Math.random() * indices.length);
        amigosSecretos[ListaAmigos[i]] = ListaAmigos[indices[amigoIndex]];
        indices.splice(amigoIndex, 1);
    }

    // Mostrar resultados
    let resultado = "Resultados del Amigo Secreto:\n";
    for (let amigo in amigosSecretos) {
        resultado += `${amigo} -> ${amigosSecretos[amigo]}\n`;
    }
    alert(resultado);
}

/* Código anterior de la función ActualizarLista, comentado para referencia
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
