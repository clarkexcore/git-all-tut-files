const fs = require('fs');

// const book = {
//     title: "Dune",
//     author: "Some Guy"
// }

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);


// const parseData = JSON.parse(bookJSON);

// console.log(bookJSON);
// console.log(parseData);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);

// console.log(data);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

const dataWrite = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataWrite);