const md5File = require('md5-file');
const path = require('path');

// Ignore CSS styles for conflicts node syntax, it will be imported on components
const ignoreStyles = require('ignore-styles');
const register = ignoreStyles.default;

// Ignore all image requests
const extensions = ['.gif', '.jpeg', '.jpg', '.png', '.svg', '.eot', '.woff', '.woff2', '.otf', '.ttf'];

// Override the default style ignorer, also modifying all image requests
register(ignoreStyles.DEFAULT_EXTENSIONS, (mod, filename) => {
  if (!extensions.find(f => filename.endsWith(f))) {
    return ignoreStyles.noOp();
  } else {
    const hash = md5File.sync(filename).slice(0, 8);
    const bn = path.basename(filename).replace(/(\.\w{3})$/, `.${hash}$1`);

    mod.exports = `/static/media/${bn}`;
  }
});

// Set up babel matching with react-app for CRA
require('babel-register')({
  ignore: /\/(build|node_modules)\//,
  presets: ['env', 'react-app'],
  plugins: [
    'syntax-dynamic-import',
    'dynamic-import-node',
    'react-loadable/babel'
  ]
});

require('./server');
