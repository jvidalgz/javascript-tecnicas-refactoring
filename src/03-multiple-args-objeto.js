function formatNumber(value, decimals, asPerct, prefix, suffix) {
    let formattedNumber = value;
    // logica para formatear numero

    return formattedNumber
}

formatNumber(10, 2, false, '', '%'); // muchos argumentos

/**
 * parametros como objeto
 */
function formatNumberV2({value = 0, asPercent = false, prefix = '', suffix = ''}) {
    // formatea numero

    let formattedNumber = value;
    // logica para formatear numero
    console.log(value, asPercent, prefix, suffix);
    return formattedNumber;
}

const num = 20;
// permite pasar algunos argumentos
formatNumberV2({value: num, suffix: '%'});

