const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express()
//const booksRouter = express.Router()

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// middleware that adds the user object from a JWT to req.user
app.use(require('./config/checkToken'));

// Put all API routes here (before the catch-all)
app.use('/api/users', require('./routes/api/users'))

// Protect all routes in the items router
const ensureLoggedIn = require('./config/ensureLoggedIn')

app.use('/api/books', ensureLoggedIn, require('./routes/api/books'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

module.exports = app

// const port = process.env.PORT || 3001;

// app.listen(port, function() {
//   console.log(`Express app running on port ${port}`);
// });