const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan nama anda :", (name) => {
  rl.question("Masukkan jabatan anda :", (jabatan) => {
    const data = `Nama anda : ${name}\nJabatan anda : ${jabatan}`;

    fs.writeFileSync("test.txt", data);

    fs.readFile("test.txt", "utf8", (err, fileData) => {
      if(err) throw err;
      console.log(fileData);
      rl.close();
    });
  });
});