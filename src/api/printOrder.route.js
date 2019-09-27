const express = require('express');
const printOrderRoutes = express.Router();

let PrintOrder = require('./printOrder.model');

printOrderRoutes.route('/add').post(function (req, res) {
    let printOrder = new PrintOrder(req.body);
    printOrder.save()
        .then(printOrder => {
            res.status(200).json({ 'printOrder': 'printOrder in added successfully' });
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
});

printOrderRoutes.route('/').get(function (req, res) {
    PrintOrder.find(function (err, printOrders) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(printOrders);
        }
    });
});

module.exports = printOrderRoutes;
