const validator = require("validator");
const contacts = require("./contact-validator-assignment")

const main = async() => {
  const name = await contacts.questions("what is your name bro?")
  const email = await contacts.questions("your email?");

  if (validator.isEmail(email)) {
    const mobile = await contacts.questions("your number mobile?");

    if (validator.isMobilePhone(mobile, "id-ID")) {
      contacts.saveContact(name, email, mobile);
    } else {
      console.log("your number mobile is not correct");
    }
  } else {
    console.log("your email is not correct");
  }
};

main();