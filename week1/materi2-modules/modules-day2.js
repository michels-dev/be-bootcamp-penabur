const fs = require('fs')

fs.writeFileSync('test.txt', 'Hello World!')

fs.readFile('test.txt', 'utf-8', (err,data) => {
  if (err) throw err;
  console.log(data);
});