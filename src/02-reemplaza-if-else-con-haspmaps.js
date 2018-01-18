function getWeatherConditionImage(condition) {
    if (condition === 'soleado') {
        return '/img/soleado.png'
    } else if (condition === 'lluvia') {
        return '/img/lluvia.png'
    } else if (condition === 'nieve') {
        return '/img/nieve.png'
    } else {
        return '/img/tormenta.png'
    }
}

// refactoring: elimina if/else reemplazando con hasmap

var conditionMap = {
    soleado: '/img/soleado.png',
    lluvia: '/img/lluvia.png',
    nieve: '/img/nieve.png',
    tormenta: '/img/tormenta.png',
};

function getWeahterConditionImageMap(condition){
    return conditionMap[condition] || '/img/soleado.png';
}

console.log(getWeahterConditionImageMap('nieve'));
