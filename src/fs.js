const fs = require("fs");

function leer(ruta, callback) {
  fs.readFile(ruta, (error, data) => {
    // Leido
    callback(data.toString());
  });
}
function escribir(ruta, contenido, callback) {
  fs.writeFile(ruta, contenido, (error) => {
    if (error) {
      console.error("No he podido escribirlo", error);
    } else {
      callback("Se ha escrito correctamente");
    }
  });
}
function borrar(ruta, callback) {
  fs.unlink(ruta, (error) => {
    if (error) {
      console.error("No he podido borrarlo", error);
    } else {
      callback("Se ha borrado correctamente");
    }
  });
}

// leer(__dirname + "/archivo.txt", console.log);

// escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log);

// borrar(__dirname + "/archivo1.txt", console.log);
