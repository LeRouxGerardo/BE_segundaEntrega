import mongoose from "mongoose";

const cartCollection = "carts";

const cartSchema = new mongoose.Screma({
    products: {
        type: Array,
        default: [],
    }

});

export const cartModel = mongoose.model(cartCollection, cartSchema);