require("dotenv").config();
const express = require("express");
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

//handlebars
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials", function (err) {});

// app.use(express.static("public"));
//contenido estatico
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {
    titulo: "Curso de Node",
    nombre: "Jaime Sanchez",
  });
});

app.get("/generic", (req, res) => {
  res.render("generic", {
    titulo: "Curso de Node",
    nombre: "Jaime Sanchez",
  });
});

app.get("/elements", (req, res) => {
  res.render("elements", {
    titulo: "Curso de Node",
    nombre: "Jaime Sanchez",
  });
});

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(8080);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
