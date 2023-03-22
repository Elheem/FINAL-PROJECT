const mongoose = require("mongoose");
const schema = mongoose.Schema;


const commandeSchema = new schema({
    username: String,
    productname: String,
    productimage: String,
    price: Number,
    date: String,
    status: String,
});

const Commande = mongoose.model('Commande', commandeSchema);

module.exports = Commande;