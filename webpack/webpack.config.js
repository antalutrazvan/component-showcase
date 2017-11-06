const path = require('path');
const ROOT_DIR = path.resolve(__dirname, '../');

const WP_CONFIG = {
  entry: path.resolve(ROOT_DIR, 'react/components/main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(ROOT_DIR, 'react/dist')
  }
};

module.exports = WP_CONFIG;