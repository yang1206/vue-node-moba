const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  title: { type: String },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  body: { type: String }
}, {
  timestamps: true
})
module.exports = mongoose.model('Article', schema)