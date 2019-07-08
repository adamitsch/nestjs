import * as mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  name: String,
  price: Number,
  available: Boolean,
  dateCreated: { type: Date, default: Date.now() },
});
