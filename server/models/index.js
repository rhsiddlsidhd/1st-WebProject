const mongoose = require('mongoose');
const CategorySchema = require('./schemas/category');
const UserSchema = require('./schemas/user');
const { ReviewSchema } = require('./schemas/review');
const { BrandSchema } = require('./schemas/brand');
const { ProductSchema } = require('./schemas/products');

exports.Category = mongoose.model('Category', CategorySchema);
exports.User = mongoose.model('User', UserSchema);
exports.Brand = mongoose.model('Brand', BrandSchema);
exports.Review = mongoose.model('Review', ReviewSchema);
exports.Product = mongoose.model('Product', ProductSchema);
