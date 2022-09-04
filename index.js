const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios  = require("axios")
const {scraping} = require("./src/generalControllerss.js")
const { PORT } = process.env;


// sync todos los modelos de una vez;


  
  conn.sync({ force: true }).then(() => {
    server.listen(PORT, () => {
    console.log(`Listening at ${PORT}🥂`)
    scraping()
    });
  });




