const fs = require("fs");
const readline = require("readline");
const validator = require("validator");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const dirPath = "data";
const dataPath = "./data/contacts.json";

// Inisialisasi Data
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

function question(questions) {
  return new Promise((resolve) => {
    rl.question(questions, (answer) => {
      resolve(answer);
    });
  });
}

function saveContact(name, email, mobile) {
  const contact = { name, email, mobile };
  const file = fs.readFileSync(dataPath, "utf8");
  const contacts = JSON.parse(file);

  if (contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    console.log(`your name "${name}" already exists.`);
    rl.close();
    return;
  }

  if (email && !validator.isEmail(email)) {
    console.log("your email is not correct.");
    rl.close();
    return;
  }

  if (!validator.isMobilePhone(mobile, "id-ID")) {
    console.log("your number is not correct.");
    rl.close();
    return;
  }

  contacts.push(contact);
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));
  rl.close();
}

function readJsonFile(dataPath) {
  const file = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(file);
}

module.exports = {
  question,
  saveContact,
  readJsonFile,
  dataPath
};
