//convert.js


var convert = function () {
  var xls = json2xls(allUsers);
  fs.writeFileSync(filename, xls, 'binary', (err) => {
     if (err) {
           console.log("writeFileSync :", err);
      }
    console.log( filename+" file is saved!");
 });
}

convert()