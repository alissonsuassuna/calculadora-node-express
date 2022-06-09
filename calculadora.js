const express = require('express');
const bodyParser = require('body-parser'); 

const app = express(); 

app.use(bodyParser.urlencoded( {extended: true} ));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {

    let num1 = Number(req.body.n2);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

    res.send('O resultado do calculo é: ' + result);
});

app.get('/bmiCalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmiCalculator', function(req, res) {
    let weight = parseFloat(req.body.weight); // parserFload para converter números quebrados
    let height = parseFloat(req.body.height);

    let bmi = weight / (height * height);

    res.send('Seu IMC é: ' + bmi)
})


app.listen(3000, function() {
    console.log('Servidor rodando na porta 3000');
});