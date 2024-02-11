function seRompe() {
  console.log("Primer log");
  return 3 + z;
  console.log("Segundo log");
}
function seRompeAsincriona() {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch {
      console.log("La función asíncrona se ha roto...");
    }
  });
}

try {
  //   seRompe();
  seRompeAsincriona();
} catch (error) {
  console.error("Vaya, algo se ha roto...");
  console.error(error);
}
console.log("Final");
