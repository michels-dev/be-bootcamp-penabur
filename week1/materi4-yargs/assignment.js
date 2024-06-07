const yargs = require("yargs");
const validator = require("validator");
const contacts = require("./contact");

// implementasi yargs
yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "your name?",
      demandOption: "true",
      type: "string",
    },
    email: {
      describe: "your email?",
      demanOption: "false",
      type: "string",
    },
    mobile: {
      describe: "your mobile?",
      demandOption: "trus",
      type: "string",
    }
  },

  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile
    };
    main(contact);
  }
});

yargs.parse();

// yargs make to validator
function main(contact){
  contacts.initData();
  const allContacts = contacts.readJsonFile(contacts.dataPath);

  if(contacts.nameExist(allContacts, contact.name)) {
    console.log(`your name "${contact.name}" already exists.`);
    return;
  }

  if(!validator.isEmail(contact.email)) {
    console.log("your email is not correct");
    return;
  }

  if(!validator.isMobilePhone(contact.mobile, "id-ID")) {
    console.log("your number mobile is not correct");
    return;
  }
  contacts.saveContact(contact.name, contact.email, contact.mobile)
}