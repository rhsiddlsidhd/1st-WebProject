const mongoose = require('mongoose');
const CategorySchema = require('./schemas/category');
const { ReviewSchema } = require('./schemas/review');
const { BrandSchema } = require('./schemas/brand');
const { ProductSchema, ImageSchema } = require('./schemas/products');

exports.Category = mongoose.model('Category', CategorySchema);
exports.Brand = mongoose.model('Brand', BrandSchema);
exports.Review = mongoose.model('Review', ReviewSchema);
exports.Product = mongoose.model('Product', ProductSchema);
exports.Image = mongoose.model('Image', ImageSchema);
