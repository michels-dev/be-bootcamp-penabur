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

// create data contact
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

// update data contact
function updateData(name,newContact) {
  const contact = readJsonFile(dataPath);
  const index = contact.findIndex(contact => contact.name.toLowerCase() === name.toLowerCase());
  if(index == -1) {
    console.log("name not found");
    return;
  }
  if (newContact.email && !validator.isEmail(newContact.email)) {
    console.log("your email is not correct.");
    rl.close();
    return;
  }
  if (newContact.mobile && !validator.isMobilePhone(newContact.mobile, "id-ID")) {
    console.log("your number is not correct.");
    rl.close();
    return;
  }

  const existingContact = contact[index];
  contact[index] = { ...existingContact, ...newContact };

  fs.writeFileSync(dataPath, JSON.stringify(contact, null, 2));
  console.log("update done");
  rl.close();
}

// delete data contact
function deleteData (name) {
  const contact = readJsonFile(dataPath);
  if (!contact.some(contact => contact.name.toLowerCase() === name.toLowerCase())) {
    console.log(`your name "${name}" NOT exists.`);
    rl.close();
    return;
  }
  const deleteData = contact.filter(contact => contact.name.toLowerCase() !== name.toLowerCase())
  fs.writeFileSync(dataPath, JSON.stringify(deleteData, null, 2));
  console.log("delete done");
  rl.close();
  return;
}

// list all data contact
function listData(){
  const contact = readJsonFile(dataPath);
  console.log("list contact");

  contact.forEach ((contacts, index) => {
    console.log( index+1 + ". nama= " + contacts.name + " email=" + contacts.email + " phone=" + contacts.mobile)
  });
  rl.close();
  return;
}

function readJsonFile(dataPath) {
  const file = fs.readFileSync(dataPath, "utf8");
  return JSON.parse(file);
}

module.exports = {
  question,
  saveContact,
  readJsonFile,
  updateData,
  deleteData,
  listData,
  dataPath
};
