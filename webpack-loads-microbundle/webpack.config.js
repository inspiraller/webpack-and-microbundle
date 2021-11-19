const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sass = require('sass')

const contentBase = path.resolve(__dirname, './public')
const prodBuild = path.resolve(__dirname, './dist')

const port = 9001

const startFile = 'index.js'
const proxy = ''

const isDevelopment = process.env.NODE_ENV !== 'production'

const config = {
  entry: path.resolve(__dirname, `./src/${startFile}`),
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },

      {
        test: /\.module\.(s[ac]|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
              // https://www.npmjs.com/package/sass-loader
              // Prefer `dart-sass`
              implementation: sass,
              sassOptions: {
                fiber: false, // not compatibile with node 16+
              },
              sassOptions: (loaderContext) => {
                console.log('loaderCointext = ', loaderContext) // not even printing any output (suspect because error is breaking)
              },
              includePaths: ['~'], // tried this doesn't work
              webpackImporter: true, // just in case - tilde won't work ? - https://webpack.js.org/loaders/sass-loader/ webpackImporter
            },
          },
        ],
      },
      {
        test: /\.(s[ac]|c)ss$/,
        exclude: /\.module\.(s[ac]|c)ss$/,
        use: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },

  resolve: {
    extensions: ['*', '.js', '.jsx', '.tsx', '.scss', '.css'],
    modules: ['node_modules'],
    alias: {
      '@mymicrobundle': path.resolve(__dirname, '../mymicrobundle/dist')
    },
  },
  output: {
    path: prodBuild,
    filename: 'bundle.js',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html'),
      favicon: './public/favicon.ico',
      filename: 'index.html',
      manifest: './public/manifest.json',
    }),
    new MiniCssExtractPlugin({
      filename: isDevelopment ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
    }),
  ],

  devServer: {
    static: contentBase, // https://gist.github.com/johnrichardrinehart/c8ec6ab1e60f39fc3b8dc738db649ec0 - contentBase was renamed to static
    port,
    historyApiFallback: true,
    hot: true,
    // proxy: {
    //   '/': {
    //     // https://dev.to/sanamumtaz/webpack-dev-server-setting-up-proxy-59bk
    //     target: proxy,
    //     pathRewrite: { '^/': '' },
    //     secure: true,
    //     logLevel: 'debug' /*optional*/,
    //   },
    // },
  },
}

const fnConfig = (globalConfig) => ({
  ...config,
})
module.exports = fnConfig
