// This fule isn't transpiled, so must use CommonJS and ES5

// Register bable to transpile before our tests run.
require('babel-register')();

// Disable webpack featurtes that Mocha does not understand
require.extensions['.css'] = function(){};
