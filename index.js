const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const bodyParser = require('body-parser');
const passport = require('passport');
// const cookieSession = require('cookie-session');
const keys = require('./config/keys');

// Connect DB and load Models
require('./models').connect(keys.mongoURI);

const app = express();

// Socket.io
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection', (socket) => {
  console.log('user connected');
});

// Express middleware
app.use(express.static('./static/'));
app.use(express.static('./client/dist/'));
// Tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());

// Passport
const localSignupStrategy = require('./services/passport/local-signup');
const localLoginStrategy = require('./services/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// Pass the authorization checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
app.use('/api', authCheckMiddleware);

// Routes rule
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  app.use(express.static('./client/dist'));

  // Express will serve up the index.html file
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log('Server is running on http://localhost:5000 or http://127.0.0.1:5000');
});