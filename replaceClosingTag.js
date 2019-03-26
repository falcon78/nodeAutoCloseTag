 let fs = require('fs');

 let regex = /(<match.*)(>)/i
 let noMatchRegex = /(<match.*)(\/>)/i


 let textarray = fs.readFileSync("input.txt").toString().split('\n');

 let file = fs.createWriteStream('output.txt');
 file.on('error', (err) => {
     console.log(error)
 });
 textarray.forEach((array) => {
     file.write(!array.match(noMatchRegex) ?
         array.replace(regex, `$1` + '/>') + '\n' : array + '\n');
 });
 file.end();

 //例 <Component url="url">    ======>    <Component url="url"/>
 //例 <Component url="url">    ======>    <Component url="url"/>