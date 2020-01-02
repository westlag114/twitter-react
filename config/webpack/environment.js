const { environment } = require('@rails/webpacker')

environment.loaders.append('json', {
  test: /\.(ts|tsx)?(\.erb)?$/,
  use: [{
    loader: 'ts-loader'
  }]
})

module.exports = environment
