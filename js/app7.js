// Control de edades: Cree un arreglo con edades de cinco personas. Recorra el
// arreglo usando for...of y muestre solo las edades mayores o iguales a 18.

const edades = [15, 22, 17, 30, 14];

console.log("Edades mayores o iguales a 18:");
for (let edad of edades) {
    if (edad >= 18) {
        console.log(edad);
    }
}