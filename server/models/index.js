import mongoose from 'mongoose';
import { CategorySchema } from './schemas/category';

exports.Category = mongoose.model('Category', CategorySchema);
