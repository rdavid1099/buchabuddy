const webpack = require('webpack')
const { environment } = require('@rails/webpacker')
const typescript =  require('./loaders/typescript')
const config = require('@rails/webpacker/package/config')
const { resolve } = require('path')

environment.loaders.append('typescript', typescript)

environment.plugins.append('ContextReplacement',
  new webpack.ContextReplacementPlugin(
    /angular(\\|\/)core(\\|\/)(@angular|esm5)/,
    resolve(config.source_path) // or resolve(config.source_path, config.source_entry_path)
  )
)

module.exports = environment
