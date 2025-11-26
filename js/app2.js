// Inventario de frutas: Dado el arreglo ["Manzana", "Pera", "Uva"], agregue “Banano”
// al inicio, retire el último elemento y muestre el arreglo final. Luego recórralo
// utilizando for...of.

const frutas = ["Manzana", "Pera", "Uva"];

frutas.unshift("Banano");

frutas.pop();

console.log(`Arreglo final de frutas: ${frutas}`);

for (let fruta of frutas) {
    console.log(`Fruta: ${fruta}`);
}