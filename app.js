/**
 * app.js
 * Use `app.js` to run your app.
 * To start the server, run: `node app.js`.
 */

const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.development' });
global.__basedir = __dirname;
const postmanToOpenApi = require('postman-to-openapi');
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

require('./database/mongodb/connection');

const app = express();
const corsOptions = { origin: process.env.ALLOW_ORIGIN, };
app.use(cors(corsOptions));

//template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// response handler middleware
// app.use(require('./services/utility/response'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./routes'));

//swagger Documentation
postmanToOpenApi('postman/CC-Template.postman_collection.json', path.join('postman/swagger.yml'), { defaultTag: 'General' }).then(data => {
  let result = YAML.load('postman/swagger.yml');
  result.servers[0].url = '/';
  app.use('/swagger', swaggerUi.serve, swaggerUi.setup(result));
}).catch(e => {
  console.log('Swagger Generation stopped due to some error');
});

app.get('/', (req, res) => {
  res.render('index');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`your application is running on ${process.env.HOST}:${process.env.PORT}`);
  });
} else {
  module.exports = app;
}
