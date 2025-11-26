// Lista de tareas: Cree un arreglo vacío llamado tareas. Agregue tres actividades
// utilizando push(). Luego elimine la última utilizando pop(). Muestre el resultado.

const tareas = [];

tareas.push("Lavar la ropa");
tareas.push("Organizar la habitacion");
tareas.push("Estudiar el proyecto (estamos dejando pa lo ultimo)");

tareas.pop();

console.log(`Tareas restantes: ${tareas}`);