const puppeteer = require("puppeteer");

async function test() {
  // Codigo
  console.log("Lanzamos navegador");

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log("Cerramos navegador");
  browser.close();
  console.log("Navegador cerrado");
}

test();
