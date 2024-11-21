import {Schema, model, models} from "mongoose";

const ProductSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    unit: {
        type: Schema.Types.ObjectId,
        ref: 'Unit',
    },
    price: {
        type: Number,
        required: true
    },
    vat: {
        type: Number,
        required: true
    }
});

const Product = models.Product || model('Product', ProductSchema);

export default Product;