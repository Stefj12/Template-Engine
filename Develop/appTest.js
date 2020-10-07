const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const generateHTML = require("./generateHTML");
const path = require("path");

// Test Data
var m = new Manager("Joe", 1, "test@test.com", 100);
var e1 = new Engineer("Josh", 2, "test1@test.com", "githubname1");
var e2 = new Engineer("Jack", 3, "test2@test.com", "githubname2");
var e3 = new Engineer("Pete", 4, "test3@test.com", "githubname3");
var i1 = new Intern("Shawn", 5, "ddst@test.com", "university");
var i2 = new Intern("Intern1", 6, "ddfadasdst@test.com", "uni123");
var i3 = new Intern("Intern2", 7, "int3@test.com", "uni12345");
var team = [m, e1, e2, e3, i1, i2, i3];

var outputFilenameTable = path.resolve(__dirname  + "/output/table.html");
var outputFilenameCard = path.resolve(__dirname  + "/output/card.html");

generateHTML.createHTML(outputFilenameTable, "table",  team);
generateHTML.createHTML(outputFilenameCard, "card", team);
