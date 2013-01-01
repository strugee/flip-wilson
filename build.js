var fs = require("fs");
var mustache = require("mustache");

console.log("loaded mustache, compiling");

fs.readFile("text.json", function(err, data) {
    if (err) {throw err;}
    fs.writeFile("build/index.html", mustache.render(data), function (err) {
        if (err) {throw err;}
    });
});