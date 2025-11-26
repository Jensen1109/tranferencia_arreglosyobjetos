// Arreglo de objetos (integración): Cree un arreglo llamado productos que contenga
// tres objetos. Cada objeto debe representar un producto con propiedades como
// nombre, precio y disponibilidad. Recorra el arreglo y muestre solo el nombre de
// cada producto.

const productos = [
    {
        "nombre": "Portatil",
        "precio": 5300000,
        "disponibilidad": true
    },  
    {
        "nombre": "Celular",
        "precio": 1200000,
        "disponibilidad": false
    },  
    {
        "nombre": "Televisor",
        "precio": 2500000,
        "disponibilidad": true
    }
];

console.log("Nombres de los productos disponibles:");
for (let producto of productos) {
    console.log(producto.nombre);
}