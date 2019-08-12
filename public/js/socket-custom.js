var socket = io();
// escuchar informacion
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Ulises',
    mensaje: 'Hola Mundo'
}, function(msj) {
    console.log(msj);
});

//escuchar informacion del servidor
socket.on('enviarMensaje', function(data) {
    console.log('Servidor :', data);
});