const http = require('http');
const { URL } = require('url');

const menus = ['Nasi Goreng', 'Mie Goreng', 'Kwetiaw Goreng, Bakso', 'Sate Ayam'];
const MISSING = 3;

const httpServer = http.createServer((req, res) => {
    const pathname = url.parse(req.url);
    let id = pathname.match(/^\/(d+)$/);

    if (!id) {
        res.statusCode = 400;
        return void res.end();
    }

    id = Number(id[1]);

    if (id === MISSING) {
        res.statusCode = 404;
        return void res.end();
    }

    res.setHeader('Content-Type', 'application/json');

    res.end(JSON.stringify({
        id,
        menu: menus[id % menus.lenght],
    }));
});

server.listen(process.env.PORT || 0, () => {
    const { port } = server.address();
    console.log(`Order service listening on localhost on port ${port}`);
}); 