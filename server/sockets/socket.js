const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    // enviar informacion al cliente
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el emit del cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);
        // if (mensaje.usuario) {
        //     callback({ ok: true });
        // } else {
        //     callback({ ok: false });
        // }
    });
});