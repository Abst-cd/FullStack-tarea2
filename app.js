/* agarrar los elementos del DOM */
const input = document.getElementById('nueva-tarea');
const agregarBtn = document.getElementById('agregar-tarea');
const eliminarBtn = document.getElementById('eliminar-tarea');
const vaciarBtn = document.getElementById('vaciar-tareas');

class gestorTareas {
    constructor() {
        this.tareas = [];
        this.lista = document.getElementById('lista-tareas');

    }

    agregarTarea(tarea) {
        
        this.tareas.push(tarea);
        input.value = '';
        this.render();
        

        btnEliminar.addEventListener('click', () => {
            this.tareas.removeChild(li);
        });
    }

    eliminarTarea() {
        this.tareas.pop();
        this.render();
    }
    vaciarTareas() {
        this.tareas = [];
        this.render();
    }
    render (){
    this.lista.innerHTML = '';

    for(let i = 0; i < this.tareas.length; i++) {    
        const li = document.createElement('li');
        li.textContent = this.tareas[i];

        const btnEliminar = document.createElement('button');
        btnEliminar.textContent = 'Eliminar tarea';

        btnEliminar.addEventListener('click', () => {
            this.tareas.splice(i, 1);
            this.render();
        });
    li.appendChild(btnEliminar);
    this.lista.appendChild(li);
}
}
}


const gestor = new gestorTareas();

agregarBtn.addEventListener('click', () => {
  gestor.agregarTarea(input.value);
  input.value = '';
});

eliminarBtn.addEventListener('click', () => {
    gestor.eliminarTarea();
});
vaciarBtn.addEventListener('click', () => {
    gestor.vaciarTareas();
});

input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        gestor.agregarTarea(input.value);
        input.value = '';
    }  
});


