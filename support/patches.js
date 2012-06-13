require.define("http-browserify", function (require, module, exports, __dirname, __filename) {
  module.exports = require("/usr/local/lib/node_modules/browserify/node_modules/http-browserify/index.js")
});

require.define("buffer-browserify", function (require, module, exports, __dirname, __filename) {
  module.exports = require("/Users/tony/Projects/http-ravendb/node_modules/buffer-browserify/index.js")
});
var Buffer = require('buffer-browserify').Buffer

require.define("ravendb", function(require, module, exports, __dirname, __filename) {
  module.exports = require("/Users/tony/Projects/http-ravendb/node_modules/ravendb/ravendb.js");
});
