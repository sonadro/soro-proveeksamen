// imports
const mongoose = require('mongoose');
const { product } = require('../models/product');

// controller
module.exports.lag_produkt = (req, res) => {
    const data = req.body.parcel;

    const document = new product(data);

    // lagre produkt
    try {
        document.save();
        res.status(200).send({
            status: 'Produktet er lagret!'
        });
    } catch(err) {
        console.error(err);
        res.status(400).send({
            status: 'Produktet ble ikke lagret :(',
            err
        });
    };
};

module.exports.get_produkter = async (req, res) => {
    // finn produkter
    try {
        const nyesteProdukter = await product.aggregate([
            {
              '$sort': {
                'dato': -1
              }
            }, {
              '$limit': 10
            }
        ]);

        res.status(200).send({
            status: 'Ok',
            produkter: nyesteProdukter
        });
    } catch(err) {
        console.error(err);
    };
};