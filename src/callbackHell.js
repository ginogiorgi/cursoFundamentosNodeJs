function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log("Hola " + nombre);
    miCallback(nombre);
  }, 1500);
}
function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Bla bla bla...");
    callbackHablar();
  }, 1000);
}
function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log("Adios " + nombre);
    otroCallback();
  }, 1000);
}
function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, --veces, callback);
    });
  } else {
    adios(nombre, callback);
  }
}

console.log("Iniciando proceso");

hola("Gino", () => {
  conversacion("Gino", 3, () => {
    console.log("Terminando proceso...");
  });
});
// hola("Gino", (nombre) => {
//   hablar(() => {
//     adios("Gino", () => {
//       console.log("Terminando proceso...");
//     });
//   });
// });
