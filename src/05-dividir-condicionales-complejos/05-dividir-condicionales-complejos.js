import _ from 'lodash';

var edad,
    jugador = {},
    conexiones = [],
    logosEspeciales = [];

var esAdolescente = (edad > 0 && edad < 20),
    primeraVezJugando = jugador.esPrimevaVezJungando,
    esParteDeUnaRed = _.some(conexiones, function (n) {
        return jugador.red === n
    }),
    tieneLogrosEspeciales = _.some(logosEspeciales, function (logros) {
        return jugador.ultimoLogro === logros;
    });

if (esAdolescente || primeraVezJugando || esParteDeUnaRed || tieneLogrosEspeciales) {
    muestraOfertaEspecial();
}


function muestraOfertaEspecial() {
    /* muestra una banner con una oferta especial */
}