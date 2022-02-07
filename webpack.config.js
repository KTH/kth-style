const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    backtotop: { import: './public/js/backtotop.js', filename: './js/backtotop.js' },
    menus: { import: './public/js/menus.js', filename: './js/menus.js' },
    vendor: { import: './public/js/vendor.js', filename: './js/vendor.js' },
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      // {
      //   test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //   type: 'asset/resource',
      //   generator: {
      //     filename: 'fonts/[name].[ext][query]',
      //   },
      // },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'public/img', to: './img' },
        { from: 'public/fonts', to: './fonts' },
        { from: 'public/css', to: './css' },
        { from: './node_modules/bootstrap/dist/js/bootstrap.min.js', to: './js/bootstrap.min.js' },
      ],
    }),
  ],
}
