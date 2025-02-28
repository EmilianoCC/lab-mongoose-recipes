const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recipeSchema = new Schema({
  // TODO: write the schema
  title: String,
  level: String,
  ingredients: [String],
  cuisine: String,
  dishType: {
    type: String,
    enum: [
      'breackfast',
      'main_course',
      'soup',
      'snack',
      'drink',
      'dessert',
      'other'
    ]
  },
  image: String,
  duration: Number,
  creator: String,
  created: {
    type: Date,
    default: Date.now
  }
})

const Recipe = mongoose.model('Recipe', recipeSchema)
module.exports = Recipe
