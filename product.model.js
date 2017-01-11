'use strict'
// modelo para guardar los productos en mongo

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let product = new Schema({
	name: String,
	price: Number,
	photo: String,
	category: String
},
{
	timestamps: true // fecha de creacion y actualizacion del registro 
});


//definicion del producto en la base de datos
module.exports = mongoose.model('products',product);

