const path = require('path');

module.exports = {
  mode : 'development',
  entry: './src/main.ts',
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    fallback: {
      "util": require.resolve("util/"),
      "crypto": require.resolve("crypto-browserify")
    }
  },
};