const readln = require ('readline');
const fs = require ('fs');
const rl = readln.createInterface({
    input : process.stdin,
    output : process.stdout,
});

const dirpath = './data';
if (!fs.existsSync(dirpath)){
fs.mkdirSync(dirpath);
}

const datapath = './data/contacts.json';
if (!fs.existsSync(datapath)){
    fs.writeFileSync(datapath, '[]', 'utf-8');
}

rl.question('Masukan Nama Anda :', (nama)=>{
rl.question('Masukan Usia Anda : ', (usia)=>{
rl.question('Masukan Hobi Anda : ', (hobi)=>{
        const contact = {nama : nama, usia : usia, hobi : hobi };
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        contacts.push(contact);

fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
console.log(`\nTerima kasih, ${nama}`);
console.log(`Usia Anda: ${usia}`);
console.log(`Hobi Anda : ${hobi}`);
console.log('Data Anda Sedang Kami Proses ...');

rl.question('\nIngin mengahapus data ini? (y/n) :' , (jawaban)=>{
    if (jawaban.toLocaleLowerCase() === 'y'){
        contacts.pop();
        fs.writeFileSync(datapath, JSON.stringify(contacts));
        console.log('Data berhasil dihapus.');
    }   else {
        console.log('Data tetap disimpan');
    }
})

rl.close();
})
})
});