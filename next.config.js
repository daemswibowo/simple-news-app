const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const Plugins = require('next-compose-plugins')
const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }]
    })
    return config
  }
}

module.exports = Plugins(
  [
    [withSass],
    [withCss],

  ],
  nextConfig
)
