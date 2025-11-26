// Notas de actividades: Cree un arreglo con seis notas numéricas. Recorra el arreglo
// usando for y calcule el promedio (no use funciones externas).

const notas = [85, 90, 78, 92, 88, 76];
let suma = 0;

for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
}

let promedio = suma / notas.length;

console.log(`El promedio de las notas es: ${promedio}`);