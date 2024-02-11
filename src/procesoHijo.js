const { exec, spawn } = require("child_process");

// exec("node consola.js", (error, stdout, sterr) => {
//   if (error) {
//     console.error(error);
//     return false;
//   }
//   console.log(stdout);
// });

let proceso = spawn("ls", ["l"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", (data) => {
  console.log("Esta muerto?");
  console.log(data.toString());
});

proceso.on("exit", () => {
  console.log("El proceso termino");
  console.log(proceso.killed);
});
