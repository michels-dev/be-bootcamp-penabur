const yargs = require("yargs");
const contacts = require("./contact");

yargs.command({
  command: "add",
  describe: "Tambah kontak baru",
  builder: {
    name: {
      describe: "Nama Anda?",
      demandOption: true,
      type: "string",
    },
    email: {
      describe: "Email Anda?",
      demandOption: false,
      type: "string",
    },
    mobile: {
      describe: "Nomor telepon Anda?",
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

yargs.parse();
