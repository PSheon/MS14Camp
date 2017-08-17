// Key.js -- figure out what set of credentials to return
if (process.env.NODE_ENV === 'production') {
  // We're in prodution mode - return the prod keys
  module.exports = require("./keys.prod");
} else {
  // We're in development mode - return the dev keys
  module.exports = require('./keys.dev');
}