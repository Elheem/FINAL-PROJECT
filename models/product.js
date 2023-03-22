const mongoose = require("mongoose");
const schema = mongoose.Schema;


const productSchema = new schema({
    img: String,
    categorie: String,
    nameproduct: String,
    categorie: String,
    description: String,
    Prix: Number,

});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;