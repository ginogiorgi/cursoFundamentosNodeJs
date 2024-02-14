// let buffer = Buffer.alloc(4);
// let buffer = Buffer.from("Hola");

// console.log(buffer.toString());

// --
let abecedario = Buffer.alloc(26);

console.log(abecedario);
for (let i = 0; i < 26; i++) {
  abecedario[i] = i + 97;
}
console.log(abecedario.toString());
