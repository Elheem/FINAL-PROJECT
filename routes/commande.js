const express = require("express");
const Commande = require("../models/commande");

const commandeRouter = express.Router();
//add commande
commandeRouter.post('/add', async (req, res) => {
    try {
        let newcommande = new Commande(req.body);
        let result = await newcommande.save();
        res.send({ commandes: result, msg: "commande is added" })
    } catch (error) {
        console.log(error);
    }

});

//get all commande
commandeRouter.get('/', async (req, res) => {
    try {

        let result = await Commande.find();
        res.send({ commandes: result, msg: "all commande" })
    } catch (error) {
        console.log(error);
    }

});

//delete commande
commandeRouter.delete("/:id", async (req, res) => {
    try {

        let result = await Commande.findByIdAndDelete(req.params.id);
        res.send({ msg: " commande dead " })
    } catch (error) {
        console.log(error);
    }
});



//update commande

commandeRouter.put("/:id", async (req, res) => {
    try {

        let result = await Commande.findByIdAndUpdate(
            { _id: req.params.id }, 
            { $set: { ...req.body } }
        );
        res.send({ commandes: "result",   msg: " commande updated " })
    } catch (error) {
        console.log(error);
    }
});



module.exports = commandeRouter;