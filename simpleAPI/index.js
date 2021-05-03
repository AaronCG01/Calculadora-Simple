//Import express and cors modules
const cors = require('cors');
const express = require('express');

//Create the express app with cors enabled
const app = express();
app.use(cors());
app.options('*', cors());

//Define port
const port = 8085;

//Define root controller (GET)
app.get('/', (req, res, next) => {
	res.send('Welcome to my API');
});

//Define get controller for suma 
app.get('/suma', (req, res, next) => {
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	console.log(num1);
	console.log(num2);

	var resultado = num1 + num2;
	console.log(resultado);
	var objResult = {
		myResultado: resultado
	}
	res.send(objResult);
});

//Define get controller for resta 
app.get('/resta', (req, res, next) => {
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	console.log(num1);
	console.log(num2);

	var resultado = num1 - num2;
	console.log(resultado);
	var objResult = {
		myResultado: resultado
	}
	res.send(objResult);
});

//Define get controller for multiplicación 
app.get('/multi', (req, res, next) => {
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	console.log(num1);
	console.log(num2);

	var resultado = num1 * num2;
	console.log(resultado);
	var objResult = {
		myResultado: resultado
	}
	res.send(objResult);
});

//Define get controller for división 
app.get('/divi', (req, res, next) => {
	var num1 = parseFloat(req.query.num1);
	var num2 = parseFloat(req.query.num2);
	console.log(num1);
	console.log(num2);

	var resultado = num1 / num2;
	console.log(resultado);
	var objResult = {
		myResultado: resultado
	}
	res.send(objResult);
});

//Define get controller for raiz
app.get('/raiz', (req, res, next) => {
	var num = parseFloat(req.query.num);
	console.log(num);

	var resultado = Math.sqrt(num);
	console.log(resultado);
	var objResult = {
		myResultado: resultado
	}
	res.send(objResult);
});

//Define get controller for raiz
app.get('/cuadrado', (req, res, next) => {
	var num = parseFloat(req.query.num);
	console.log(num);

	var resultado = num * num;
	console.log(resultado);
	var objResult = {
		myResultado: resultado
	}
	res.send(objResult);
});

app.listen(port, () => 
	console.log('Listening on port ' + port)
);