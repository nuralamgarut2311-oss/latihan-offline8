// Membaca isi file
// Shync

const
data = fs.readFileSync('data/test.txt');
console.log(data.toString());

// Atau

const
data1=fs.readFileSync('data/test.txt','utf-8');
console.log(data1);