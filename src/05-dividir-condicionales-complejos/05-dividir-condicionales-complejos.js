import _ from 'lodash';

var edad,
    jugador = {},
    conexiones = [],
    logrosEspeciales = [];


var conditions = [
    () => {
        return edad > 0 && edad < 20
    },
    () => jugador.esPrimevaVezJugando,
    () => {
        return _.some(conexiones, (n) => jugador.red === n);
    },
    () => {
        return _.some(logrosEspeciales, (logros) => jugador.ultimoLogro === logros);
    },
    () => {
        return logrosEspeciales.length > 10;
    }
]

let matches = _.some(conditions, c => c());
if (matches){
    muestraOfertaEspecial();
}

function muestraOfertaEspecial() {
    /* muestra una banner con una oferta especial */
}