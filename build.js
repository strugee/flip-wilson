var fs = require("fs");
var mustache = require("mustache");

console.log("loaded mustache, compiling");

fs.writeFile("build/index.html", mustache.render("text.json"), function(err) {
	if (err) throw err;
});
/*fs.readFile("text.json", function(err, data) {
    if (err) throw err;
    console.log("read file, now compiling");
    fs.writeFile("build/index.html", mustache.render(data), function (err) {
        if (err) throw err;
    });
});*/