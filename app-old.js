const http = require("http");

http
  .createServer((req, res) => {
    // res.setHeader("Content-Disposition", "attachment; filename=usuarios.csv");
    // res.writeHead(200, { "Content-Type": "application/csv" });

    res.write("Hola Mundo");

    res.end();
  })
  .listen(8080);

console.log("listening port:", 8080);
