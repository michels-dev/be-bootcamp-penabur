const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Masukkan nama: ', (name) => {
    rl.question('Masukkan jabatan: ', (jabatan) => {
        console.info('Nama: ' + name + '\n' + 'Jabatan: ' + jabatan);
        rl.close();
    });
});