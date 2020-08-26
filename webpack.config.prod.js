const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')

module.exports = {
  mode: 'production',
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js'),
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
}
