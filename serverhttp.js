const http = require('node:http');

const puestoDesignado = process.env.PORT ?? 3000;

const procesarRequest = (req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf8');

    if(req.url === '/') {
        res.end('<h1>Bienvenido a mi pagina web 2</h1>');
    } else if(req.url === '/contacto') {
        res.end('<h1>Bienvenido a mi Contacto</h1>');
    } else {
        res.end('<h1>404</h1>');
    }
}

const server = http.createServer(procesarRequest);

server.listen(puestoDesignado, () => {
    console.log(`El servidor esta escuchando a traves de la ruta http://localhost:${puestoDesignado}`)
})