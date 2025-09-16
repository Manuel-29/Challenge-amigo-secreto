let listaAmigos = [];

// Función para agregar un nombre
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === "") {
        mostrarMensaje('Debe ingresar un nombre');
        return;
    }

    listaAmigos.push(nombre);
    input.value = '';
    mostrarLista();
    mostrarMensaje('');
}

// Función para mostrar la lista de nombres
function mostrarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    listaAmigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para mostrar mensajes
function mostrarMensaje(msg) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    if (msg) {
        const li = document.createElement('li');
        li.textContent = msg;
        resultado.appendChild(li);
    }
}

// Función para sortear un nombre
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        mostrarMensaje('Agrega al menos un nombre para sortear');
        return;
    }
    const numero = Math.floor(Math.random() * listaAmigos.length);
    const nombreSorteado = listaAmigos[numero];
    mostrarMensaje(`El amigo secreto es: ${nombreSorteado}`);
}
