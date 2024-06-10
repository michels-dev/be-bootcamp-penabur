const yargs = require("yargs");
const contacts = require("./contact");

// create data contact
yargs.command({
  command: "add",
  describe: "add new contact",
  builder: {
    name: {
      describe: "your name?",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "your email?",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "your number mobile",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    const contact = {
      name: argv.name,
      email: argv.email,
      mobile: argv.mobile
    };
    contacts.saveContact(contact.name, contact.email, contact.mobile);
  }
});

// update data contact
yargs.command({
  command: "update",
  describe: "update contact",
  builder: {
    name: {
      describe: "your name",
      demandOption: true,
      type: "string",
    },
    newName: {
      describe: "your new name?",
      demandOption: false,
      type: "string",
    },
    newEmail: {
      describe: "your new email?",
      demandOption: false,
      type: "string",
    },
    newMobile: {
      describe: "your new number mobile?",
      demandOption: false,
      type: "string",
    }
  },
  handler(argv) {

    const newContact = {};
    if (argv.newName) newContact.name = argv.newName;
    if (argv.newEmail) newContact.email = argv.newEmail;
    if (argv.newMobile) newContact.phone = argv.newMobile;


    contacts.updateData(argv.name,newContact);
  }
});

// delete data contact
yargs.command({
  command: "delete",
  describe: "delete contact",
  builder: {
    name: {
      describe: "your name",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    contacts.deleteData(argv.name);
  }
});

// list all data contact
yargs.command({
  command: "listData",
  describe: "list all data",
  handler(argv) {
    contacts.listData(argv.name);
  }
});

yargs.parse();
