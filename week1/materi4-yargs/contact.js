const fs = require("fs");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const dirPath = "data";
const dataPath = "./data/contacts.json";

function initData(){
  if(!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    if(!fs.existsSync(dataPath)) {
      fs.writeFileSync(dataPath, "[]", "utf8")
    }
  }
}

function question(questions) {
  return new Promise((resolve) => {
    rl.question(questions, (answer) => {
      resolve(answer);
    })
  })
}

function saveContact(name, email, mobile) {
  const contact = {name, email, mobile};
  const file = fs.readFileSync(dataPath, "utf8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync(dataPath, JSON.stringify(contacts, null, 2));
  rl.close();
}

function readJsonFile(dataPath) {
  const file = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(file);
}

function nameExist(contacts, name) {
 return contacts.some(contact => contact.name === name);
}

module.exports = {
  initData,
  question,
  saveContact,
  readJsonFile,
  nameExist,
  dataPath
};