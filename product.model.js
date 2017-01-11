'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let product = new Schema({
	name: String,
	price: Number,
	photo: String,
	category: String,
})

