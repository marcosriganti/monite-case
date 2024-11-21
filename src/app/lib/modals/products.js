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
    units: {
        type: String,
        required: true
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