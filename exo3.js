const fs = require('fs');

fs.readFile('input.txt', 'utf8', (err, data) => {

  const maj = data.toUpperCase();
  fs.writeFile("output.txt", maj, (err) => {

    console.log("Tout est en maj")

  })
})