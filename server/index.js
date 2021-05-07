require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const session = require('express-session');
const userCtrl = require('./controllers/userController');
const bucketCtrl = require('./controllers/bucketController');
const exphbs = require('express-handlebars')
const path = require('path');
const nodemailer = require('nodemailer');
const ctrl = require('./controllers/emailController');


//View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Static folder
app.use(express.static(__dirname + '/../build'))
// app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(express.json())
// const SERVER_PORT = 4545;

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'daisies;',
  cookie: { maxAge: 1000 * 60 * 60 * 48 }
}))

// // Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.post('/api/auth/logout', userCtrl.logout);
app.post('/api/email', ctrl.email)

// // Bucket Endpoints
app.post('/api/bucket', bucketCtrl.addToBucket);
app.post('/api/moments', bucketCtrl.addToMoments);
app.get('/api/bucket', bucketCtrl.getBucket);
app.put('/api/bucket/:itemId', bucketCtrl.toggleCompleted);
app.delete('/api/bucket/:itemId', bucketCtrl.deleteBucket);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build/index.html'))
});


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(SERVER_PORT, () => console.log(`Server rockin out on ${SERVER_PORT}!`));
})

