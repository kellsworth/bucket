require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const session = require('express-session');


// const SERVER_PORT = 4545;

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'daisies;',
  cookie: { maxAge: 1000 * 60 * 60 * 48 }
}))



// massive({
//   connection_String: CONNECTION_STRING,
//   ssl: {
//     rejectUnauthorized: false
//   }
// }).then((dbInstance) => {
//   app.set('db', dbInstance);
// })

app.listen(SERVER_PORT, () => console.log(`Server rockin out on ${SERVER_PORT}!`));