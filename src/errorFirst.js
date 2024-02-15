function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (error) {
      callback(error, null);
    }
  }, 1000);
}

asincrona((error, dato) => {
  if (error) {
    console.error("Tenemos un error");
  }
});
