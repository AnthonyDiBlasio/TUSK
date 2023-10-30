
const express = require('express');
const app = express();
const routes = require('./routes');

const cors = require('cors');


app.use(cors());

// import sequelize connection
const sequelize = require('./config/connection');


const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({force:false}).then(() => {
  app.listen(PORT, () =>
    console.log(`App listening on port ${PORT}!`));
});