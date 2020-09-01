const path = require('path');

module.exports = {
  entry: './index.ts',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  resolve: {
    extensions: [ ".tsx", ".ts", ".js", ".css"]
  },
  devtool: "source-map",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};