const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama anda :", (name) => {
  rl.question("Masukkan jabatan anda :", (jabatan) => {
    console.info("Nama anda :" + name + "\n" + "Jabatan anda :" + jabatan);
    rl.close();
  });
});