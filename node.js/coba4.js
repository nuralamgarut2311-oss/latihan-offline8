const {error} = require ('console');
const fs = require ('fs');

// Menuliskan String Ke File

try {
    fs.writeFileSync ('data/test.txt', 'Hello Shync');
} catch (e) {
    console.log(e);
}

// Menuliskan String Ke File

fs.writeFile('data/TextDecoderStream.txt', 'Hello Asynchoronous', (err)=> {
    console.log(err);
})

// Membaca isi file
// Shync

const
data = fs.readFileSync('data/test.txt');
console.log(data.toString());

// Atau

const
data1=fs.readFileSync('data/test.txt','utf-8');
console.log(data1);