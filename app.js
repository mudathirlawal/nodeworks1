const fs = require("fs");
const os = require("os");
const path = require("path");

console.log("Alt___\nSchool\n");
console.log("School of Engineering (Node.js track)");
console.log("Assignment I Solutions By: Mudathir Lawal\n");

const $cwd = path.resolve();
const $fileName = "/home/Documents/JavaScript_Book.pdf";

console.log("Q1: " + $cwd+ "\n");
console.log("Q2: " + path.sep + "\n");
console.log("Q3: " + path.extname($fileName) + "\n");
