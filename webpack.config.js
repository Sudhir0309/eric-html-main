const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development', // Change the mode to production
  entry: {
    scripts: './dev/js/main.js', // JavaScript entry point
    styles: './dev/styles/_index.scss', // Styles entry point
  },
  output: {
    filename: '[name].website-script-bundle.js', // Use [name] to generate unique filenames based on entry point names
    path: path.resolve(__dirname, 'public/dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({}),
  ],
};