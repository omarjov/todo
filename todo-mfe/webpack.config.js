const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const dependencies = require('./package.json').dependencies

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  devServer: {
    port: 3001,
    liveReload: true,
    historyApiFallback: true,
  },
  name: 'left-nav',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin(),
    new ModuleFederationPlugin({
      name: 'todoMfe',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './TodoMfe': './src/App.tsx',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: dependencies.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: dependencies['react-dom'],
        },
      },
    }),
  ],
}
