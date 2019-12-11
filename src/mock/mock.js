const hotcate = require('./cookbook-hotcate.json')
const list = require('./cookbook-list.json')
const cate = require('./cookbook-category.json')

module.exports = () => {
  return {
    hotcate,
    list,
    cate
  }
}