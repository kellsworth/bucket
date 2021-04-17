require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const { SERVER_PORT, CONNECTION_STRING } = process.env;
const session = require('express-session');
const userCtrl = require('./controllers/user')

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
// app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

// // Post Endpoints
// app.get('/api/posts', postCtrl.readPosts);
// app.post('/api/post', postCtrl.createPost);
// app.get('/api/post/:id', postCtrl.readPost);
// app.delete('/api/post/:id', postCtrl.deletePost)


massive({
  connectionString: CONNECTION_STRING,
  ssl: {
    rejectUnauthorized: false
  }
}).then((dbInstance) => {
  app.set('db', dbInstance);
  app.listen(SERVER_PORT, () => console.log(`Server rockin out on ${SERVER_PORT}!`));
})

