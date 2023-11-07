const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
