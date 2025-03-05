const expres = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use(express.static('./public'));

app.get('./algo', (req, res) => {
    res.send('Hola mundo desde algo')
});

app.get('/algo/:id', (req, res) => {
    res.send(`Hola mundo desde algo ${req.params.id}`)
});

app.get('/algoquery', (req, res) => {
    res.send(`Hola mundo desde algo ${req.query.nombre}`)
});

app.post('/algo', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})

app.put('/algo', (req, res) => {
    console.log(req.body);
    res.json(req.body)
})

app.get('/redirect', (req, res) => {
    res.redirect('https://www.google.com')
})

app.get('/descargar', (req, res) => {
    const imagePath = path.join(__dirname, 'public', 'nodeyexpress.png')
    res.download(imagePath, 'imagen.jpg', err => {
        if (err) {
            res.status(500).send('Error al descargar la imagen')
        } else {
            console.log('La imagen se ha descargado correctamente')
        }
    })
})

app.all('*', (req, res) => {
    res.send('No se encontro la ruta')
})

app.listen(3000, () => {
    console.log('Servidor escuchando a traves de la url http://localhost:3000')
})