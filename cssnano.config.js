// This config was added due to problem with the minification of font-family names done by cssnano.
// The problem is described here: https://github.com/parcel-bundler/parcel/issues/2920

module.exports = {
  preset: [
    'default',
    {
      minifyFontValues: {
        removeQuotes: false,
      },
    },
  ],
}
