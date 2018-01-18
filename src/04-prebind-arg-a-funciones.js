function ejecutaOperacion(name = 'default', args = {}) {
    // usa los argumentos para realizar la operacion
}

function encuentraDeporte() {
    // ejecucion compleja
    return Promise.resolve('Ping pong');
}

function obtieneLista() {
    // ejecucion compleja
    return Promise.resolve({color: 'rojo', motor: 'encendido', año: 2018});
}

encuentraDeporte().then(args => {
    ejecutaOperacion('juega', args);
});

obtieneLista().then(args => {
    ejecutaOperacion('comprar', args);
});

// elimina la necesidad de funciones anonimas usando .bind()
const jugar = ejecutaOperacion.bind(null, 'juega');
const comprar = ejecutaOperacion.bind(null, 'comprar');

encuentraDeporte().then(jugar);
obtieneLista().then(comprar);