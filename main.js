const fs = require('fs')



fs.readFile('./users.json', function(error, data) {
  if (error) {
    throw error;
  }

  const actualObj = JSON.parse(data);
  console.log(actualObj)
})


//asynchroness fs.readFile

 GET users[1]