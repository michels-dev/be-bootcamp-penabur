const fs = require("fs");
const readline = require("readline");
const validator = require("validator");

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

// output
rl.question("What is your name bro?", (name) => {
  rl.question("Your number mobile? (format: 08xx xxxx xxxx)", (mobile) => {

    // validasi for number mobile
    if(validator.isMobilePhone(mobile, 'id-ID')){
      rl.question("Your Email?", (email) => {

        // validasi for email
        if(validator.isEmail(email)) {
          const contact = {name, mobile, email};
          const file = fs.readFileSync(dataPath, "utf-8");
          const contacts = JSON.parse(file);
          contacts.push(contact);
          fs.writeFileSync(dataPath, JSON.stringify(contacts));
          console.log("Thank you!");

          // if the email is not correct
        } else {
          console.log("your email is not correct");
          rl.close();
        }
      });
      // if the number is not correct
    } else {
      console.log("your number is not correct, example (08xx xxxx xxxx)");
      rl.close();
    }
  });
});
