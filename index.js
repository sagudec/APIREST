'use strict' //para el uso de todas las variables

const express= require('express') //importar express al proyecto
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/my_database');


// const para definir una variable

const app= express()//crear el servidor
const port = process.env.PORT || 3001

const Product = require('./product.model')

app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json()) //para permitir peticiones en formato json


// TIPO GET, PARA QUE MUESTRE LOS PRODUCTOS

app.get('/api/product', (req, res) => {
	Product.find({},function(error,products){
		if (error) throw error;	
		return res.status(200).json(products)

	})
	

})


// ALTERNA PARA UNO ESPECIFICO 
app.get('/api/product/:productId', (req, res)=> {


})

// TIPO POST
app.post('/api/product', (req, res)=> {

	// para poder ver el cuerpo de la peticion
	console.log(req.body)
	let newProduct = Product(req.body);
	newProduct.save(function(error,createdProduct){
		if (error) throw error;
		if (createdProduct){
			return res.status(200).json({message: 'El producto se ha recibido',
				createdProduct:createdProduct});
		}
		return res.status(500).json({message: 'Error desconocido'});
	})
})

// TIPO PUT, PARA LAS ACTUALIZACIONES


app.put('/api/product/:productId', (req, res)=> {

	console.log(req.body)
	Product.findOneAndUpdate({_id:req.params.productId},{$set:req.body},{new:true},function(error,updatedProduct){
		if (error) throw error;
		if (updatedProduct){
			return res.status(201).json({message: 'El producto se ha actualizado',
				updatedProduct:updatedProduct});
		}
		return res.status(500).json({message: 'Error desconocido'});
	})

})


// TIPO DELETE

app.delete('/api/product/:productId', (req, res) => {


})




app.listen(port,() => {
console.log(`API REST corriendo en http://localhost:${port}`)

})