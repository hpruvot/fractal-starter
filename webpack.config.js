const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FractalWebpackPlugin = require('fractal-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpackEnv = require('./webpack.mode.js');

module.exports = {
  mode: webpackEnv.mode,
  entry: {
    "./js/app": "./src/js/app.js",
    "./app": "./src/scss/app.scss"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts',
              publicPath: './../fonts/'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, 'src/font'),
        to: 'font',
        test: /\.(woff|woff2|eot|ttf|svg)$/
      },
      {
        from: path.resolve(__dirname, 'src/img'),
        to: 'img'
      }
    ]),
    new FractalWebpackPlugin({
      mode: 'server', // mode: 'build'
      configPath: './fractal.config.js' // defaults to 'fractal.js'
    })
  ],
  watch: webpackEnv.mode === 'development'
};
