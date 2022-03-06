const mongoose = require('mongoose');

require('dotenv').config({path:__dirname+'/./../../.env'});

const uri = process.env.ATLAS_URI;
// console.log(uri);

mongoose
  .connect(uri, { /*useNewUrlParser: true, useFindAndModify: false*/ })
  .catch(e => {
    console.error('Connection error', e.message);
  });

const db = mongoose.connection;

db.once('open', () => {
  console.log("Successfully connected mongodb atlas");
});

module.exports = db;