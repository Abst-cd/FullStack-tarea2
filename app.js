/* agarrar los elementos del DOM */
const lista = document.getElementById('lista-tareas');
const input = document.getElementById('nueva-tarea');
const agregarBtn = document.getElementById('agregar-tarea');
const eliminarBtn = document.getElementById('eliminar-tarea');
const vaciarBtn = document.getElementById('vaciar-tareas');



/* función para agregar una tarea */
function agregarTarea() {
    const respuesta = input.value.trim();
    if (respuesta === '') { /* si la respuesta esta vacia...*/
        alert('INGRESE RESPUESTA VALIDA');
        return;
    }
    /* se crea un nuevo elemento de lista y se agrega a la lista */
    const li = document.createElement('li');
    li.textContent = respuesta;
    lista.appendChild(li);
    input.value = '';

    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    li.appendChild(btnEliminar);

    btnEliminar.addEventListener('click', () => {
        lista.removeChild(li);
    });

    
}

function eliminarTarea() {
    document.getElementById('lista-tareas').removeChild(lista.lastChild);
}

function vaciarTareas() {
    document.getElementById('lista-tareas').innerHTML = '';
}



vaciarBtn.addEventListener('click', vaciarTareas);

input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
agregarBtn.addEventListener('click', agregarTarea);
eliminarBtn.addEventListener('click', eliminarTarea);

});


