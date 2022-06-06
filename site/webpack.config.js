const path = require('path')
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  entry: './javascript/index.js',
  output: {
    filename: 'index.js',
    path: path.resolve('..', 'public', 'cfg')
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              [
                "@babel/preset-env",
                {
                  "useBuiltIns": "entry",
                  "modules": false,
                  "corejs": 2
                }
              ]
            ],
            "plugins": [
              "@babel/plugin-transform-runtime"
            ]
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      'node_modules': path.join(__dirname, 'node_modules'),
      'my_base': path.join(__dirname)
    }
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  watchOptions: {
    ignored: /node_modules/
  }
}
