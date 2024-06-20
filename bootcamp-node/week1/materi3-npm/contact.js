const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question("What is your name bro?", (name) => {
  rl.question("Your number mobile?", (number) => {
    const contact = {name,number};
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(contact);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log("Terimakasih sudah memasukkan data anda!");
    rl.close();
  });
});