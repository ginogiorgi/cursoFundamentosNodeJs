const tabla = [
  { a: 1, b: "Z" },
  { a: 2, b: "D" },
];

console.log("Hola");
console.error("Hola");
console.warn("Hola");
console.table(tabla);
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");

console.group("Conversación");
console.log("Hola");
console.log("Blablabla");
console.group("Blablabla");
console.log("blablabla");
console.groupEnd("Blablabla");
console.log("Adios");
console.groupEnd("Conversación");
