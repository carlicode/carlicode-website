// CloudFront Function para manejar index.html en subdirectorios
// Esta función agrega /index.html a las URLs que terminan en /

function handler(event) {
    var request = event.request;
    var uri = request.uri;

    // Si la URI termina en /, agregar index.html
    if (uri.endsWith('/')) {
        request.uri += 'index.html';
    }
    // Si la URI no tiene extensión y no termina en /, agregar /index.html
    else if (!uri.includes('.')) {
        request.uri += '/index.html';
    }

    return request;
}
