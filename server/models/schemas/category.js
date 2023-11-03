const { ObjectId } = require('mongodb');
const { Schema } = require('mongoose');

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  parentCategory: {
    type: ObjectId,
  },
  categoryType: {
    type: String,
  },
});

module.exports = CategorySchema;
