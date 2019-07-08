import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly price: Number;
  readonly available: Boolean;
  readonly dateCreated: Date;
}
