const express = require('express');
const routes = require('./routes');
// https://sequelize.org/docs/v6/getting-started/
const sequelize = require('./config/connection.js');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

sequelize.sync({force:false}).then(
  () => {
    app.listen(PORT, () => {
      console.log(`App listening on port ${PORT}!`);
    });
  }
)
//Makes it so we don't require all the data to be loaded at once
//By default, data IS sent synchronously 