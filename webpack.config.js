const path = require('path');

const ReactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const plugins = [
  new ReactLoadablePlugin({
    filename: './public/react-loadable.json',
  })
]

if (process.env.NODE_ENV === "analyse") {
  plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
  entry: {
    client: './src/client.js'
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    chunkFilename: '[name].bundle.js',
    filename: "[name].js"
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  plugins,
}
