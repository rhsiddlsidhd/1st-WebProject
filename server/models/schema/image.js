const { Schema } = require('mongoose');
const imageSchema = new Schema({
  img_src: {
    type: String,
    required: true,
  },
  img_type: {
    type: String,
    required: true,
  },
});

module.exports = imageSchema;
