const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaType.ObjectId;
const ProductSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true
    },
    type: {
        type: String, //Telefono o funda
        required: true
    },
    brand: {            //Marca del producto
        type: String,
        required: true
    },
    model: {            // MODELO DEL TELEFONO PARA FILTRAR 
        type: String,
        required: true
    },
    screen: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    processor: {
        type: String,
        required: true
    },
    ram: {
        type: Number,
        required: true
    },
    phone_img: {
        type: String,
        required: true
    }
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;