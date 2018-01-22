/**
 * Util para realizar inicializaciones complejas
 * @type {{apiUrl, timezone, account, theme}}
 */
var defaultConfig = (() => { // IIFE
    var ajustes = ajustesLectura();
    var apiUrl = `https://${ajustes.apiDomain}:${ajustes.apiPort}/api`;

    return  {
        apiUrl: apiUrl,
        timezone: ajustes.timezone,
        account: ajustes.account,
        theme: ajustes.theme
    };

    function ajustesLectura() {
        // lee desde storage local
        return {/* ... */}
    }
})();
console.log(defaultConfig);
