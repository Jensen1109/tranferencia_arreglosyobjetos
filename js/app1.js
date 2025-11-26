// Lista de asistencia: Cree un arreglo con los nombres de cinco aprendices. Agregue
// un nuevo nombre al final y elimine el primero. Finalmente, muestre la cantidad total
// de nombres registrados.

const aprendices = ["Jensen", "David", "Edwar", "John", "Michael"];

aprendices.push("Josue");
aprendices.shift();

console.log(`Cantidad total de aprendices registrados: ${aprendices.length}`);