const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({

    productid:{
        type: Number,
        require: true
    },
    name:{
        type: String,
        require: true
    },
    description:{
        type: String,
        require: true
    },
    price:{
        type: Number,
        require: true
    }
});

module.exports = mongoose.model('Prodcuts', productsSchema);