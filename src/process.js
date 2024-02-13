// const process = require("process");

process.on("exit", () => {
  console.log("El proceso acabó");
  setTimeout(() => {
    console.log("Esto no se va a ver nunca");
  });
});
process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});
process.on("uncaughtException", (error) => {
  console.error("Vaya, se nos ha olvidado capturar un error!");
  //   console.error(error);
});

console.log("Esto si se va a ver");
// z + 3;
