// Arreglo
let tareas = [];

// Función flecha para agregar tarea
let anadirtarea = () => {
    let tareaText = document.getElementById('tareaInput').value;
    if (tareaText) {
        tareas.push(tareaText); // Agregar 
         updateListaTareas(); // Mostrar 
         console.log(tareas); // Mostrar 
       }
  };

// actualizar la lista
let updateListaTareas = () => {
    let ListaTareas = document.getElementById('ListaTareas');
    ListaTareas.innerHTML = ''; // Limpiar lista
    tareas.forEach((tarea, index) => {
        let li = document.createElement('li');
        li.textContent = tarea;

// Botón para eliminar
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => {
            tareas.splice(index, 1); // Eliminar tarea
            updateListaTareas(); 
            console.log(tareas); // Mostrar en consola
        };

        li.appendChild(deleteButton);
        ListaTareas.appendChild(li);
    });
};

document.getElementById('anadirtareaButton').onclick = () => anadirtarea();