/**
 * db.js
 * @description :: exports database connection using mongoose
 */

const mongoose = require('mongoose');
const uri = process.env.NODE_ENV === 'test' ? process.env.DB_TEST_URL : process.env.DB_URL;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
let db = mongoose.connection;

db.once('open', () => {
  console.log('Congratulations! Your MongoDB connection has been successfully established. Happy coding!');
});

db.on('error', () => {
  console.log('Error in mongodDb connection');
});

module.exports = mongoose;