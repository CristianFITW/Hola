// Arreglo
let tareas = [];

// Función flecha para agregar tarea
let agregarTarea = () => {
    let textoTarea = document.getElementById('tareaInput').value;
    if (textoTarea) {
        tareas.push(textoTarea); // Agregar 
        actualizarListaTareas(); 
        console.log(tareas); 
    }
};

// Actualizar la lista
let actualizarListaTareas = () => {
    let listaTareas = document.getElementById('listaTareas');
    listaTareas.innerHTML = ''; // Limpiar lista
    tareas.forEach((tarea, index) => {
        let li = document.createElement('li');
        li.textContent = tarea;

        // Botón para eliminar
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => {
            tareas.splice(index, 1); // Eliminar tarea
            actualizarListaTareas(); 
            console.log(tareas); 
        };

        li.appendChild(botonEliminar);
        listaTareas.appendChild(li);
    });
};

document.getElementById('agregarTareaButton').onclick = () => agregarTarea();
