let suma = 0;

console.time("bucle");
console.time("blucle1");
for (let i = 0; i < 10000000; i++) {
  suma++;
}
console.timeEnd("blucle1");
console.time("blucle2");
for (let i = 0; i < 100000000; i++) {
  suma++;
}
console.timeEnd("blucle2");
console.time("blucle3");
function asincrona() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina el proceso asincrono");
      resolve();
    }, 1000);
  });
}
asincrona().then(() => {
  console.timeEnd("blucle3");
});

console.timeEnd("bucle");
