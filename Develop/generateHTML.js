const fs = require("fs");
const ejs = require("ejs");
console.log("File");
function createHTML(outputFilename, outputLayout, team) { 
    console.log(outputFilename, outputLayout, team);
    var ejsFile;
    switch(outputLayout) {
        case 'table':
            ejsFile = __dirname + "/templates/table.ejs";
            break;
        case 'card':
            ejsFile = __dirname + "/templates/card.ejs";
            break;
        default:
            ejsFile = __dirname + "/templates/table.ejs";
            break;
    }
    
    var htmlStr;
    ejs.renderFile(ejsFile, {team: team}, function(err,str){
        if (err) throw err;
        htmlStr = str;
    });

    fs.writeFile(outputFilename, htmlStr, function(err){
        if (err) throw err;
        console.log("Written to file: ", outputFilename);
    });
}

module.exports = { 
    createHTML: createHTML
};