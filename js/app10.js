// Clasificación por tipo de estructura: Observe las siguientes situaciones y decida si
// debe usar arreglo u objeto. Justifique con una frase, luego codifique su respuesta
// con un ejemplo.
// a. Lista de colores favoritos.
// b. Información completa de un estudiante.
// c. Precios de diferentes camisetas.
// d. Descripción de un computador portátil.

const coloresFav = ["Negro", "Blanco", "Azul", "Celeste", "Rojo"];
console.log(`Colores favoritos: ${coloresFav}`);

const aprendiz = {
    "nombre": "Jensen Rodriguez",
    "edad": 21,
    "carrera": "Ginecologo",
    "universidad": "Universidad De Los Andes"
};
console.log(`\nInformación del estudiante: ${aprendiz.nombre}, ${aprendiz.edad} años, estudia ${aprendiz.carrera} en ${aprendiz.universidad}.`);

const preciosCam = [15000, 20000, 25000, 30000, 35000];
console.log(`\nPrecios de camisetas: ${preciosCam}`);

const portatil = {
    "marca": "HP",
    "modelo": "HP Envy 15",
    "procesador": "Intel Core i7",
    "RAM": "16GB",
    "almacenamiento": "512GB SSD"
};
console.log(`\nDescripción del computador portátil: ${portatil.marca} ${portatil.modelo}, Procesador: ${portatil.procesador}, RAM: ${portatil.RAM}, Almacenamiento: ${portatil.almacenamiento}.`);