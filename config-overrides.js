const { 
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy,
  setWebpackPublicPath
} = require('customize-cra');

const X = require('customize-cra')

const path = require('path')

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),

  addWebpackAlias({
    assets: path.resolve(__dirname, './src/assets'),
    utils: path.resolve(__dirname, './src/utils'),
    pages: path.resolve(__dirname, './src/pages'),
    '@': path.resolve(__dirname, './src/components'),
  }),

  addDecoratorsLegacy(),

  setWebpackPublicPath('http://jiaxinmxx.top/cookbook/')
)