const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create a new data, if data is not already
const dirPath = "data";
if(!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// create a new file contacs.json, if file is not already
const dataPath = "data/contacts.json";
if(!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf8");
}

// make a function to ask
const questions = (ask) => {
  return new Promise((resolve, reject) => {
    rl.question(ask, (inputVariable) => {
      resolve(inputVariable);
    });
  });
}

// save data contact
const saveContact = (name, email, mobile) => {
  const contact = {name, email, mobile};
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(contact);
  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log("Thank you!");
  rl.close();
}

module.exports = {questions, saveContact};
