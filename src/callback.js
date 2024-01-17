function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback();
  }, 1500);
}
function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}

console.log("Iniciando proceso");
hola("Gino", () => {
  adios("Gino", () => {
    console.log("Terminando proceso...");
  });
});
