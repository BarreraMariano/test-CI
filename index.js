"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var PORT = 3000;
app.get("/hola", function (req, res) {
    res.json({
        message: "Hola mundo, desde el servidor",
    });
});
app.listen(PORT, function () {
    console.log("Server is running on port: ", PORT);
});
