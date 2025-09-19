const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Masukkan Nama Anda: ', (nama) => {
    rl.question('Masukkan No HP Anda: ', (nohp) => {
        rl.question('Masukan Alamat Anda:', (alamat) => {
        console.log(`\nTerima kasih, ${nama}`);
        console.log(`Nomor HP Anda: ${nohp} Telah Di Blokir`);
        console.log(`Alamat : ${alamat}`);
        rl.close();
    })
        })
});
