require('./config/config'); //Exportamos el archivo de configuración

const express = require('express');
const app = express();

const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Consultar registro
app.get('/usuario', function(req, res) {
    res.json('get Usuario')
});
//Crear registro
app.post('/usuario', function(req, res) {
    //res.json('post Usuario')
    let body = req.body;

    if (body.nombre === undefined) {

        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });

    } else {
        res.json({
            body
        });

    }

});
//Para actualizar
app.put('/usuario/:id', function(req, res) {

    let id = req.params.id;
    //res.json('put Usuario')
    res.json({
        id
    });

});

app.delete('/usuario', function(req, res) {

    //let id = req.param.id
    res.json('delete Usuario')
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});