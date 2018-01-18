import _ from 'lodash';

var edad,
    jugador = {},
    conexiones = [],
    logosEspeciales = [];

if ((edad > 0 && edad < 20) ||
    jugador.novato || _.some(conexiones, function (n) {
        return jugador.red === n
    }) ||
    _.some(logosEspeciales, function (logros) {
        return jugador.ultimoLogro === logros;
    })) {
    muestraOfertaEspecial();


    function muestraOfertaEspecial() {
        /* muestra una banner con una oferta especial */

    }
}