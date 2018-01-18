var title = `My Card`, photoUrl = 'http://placehold.it/350x150';

var html =
    '<div class="mdl-card mdl-card--raised"' +
    '<div class="mdl-card__title">' + title + '</div>' +
    '<div class="mdl-card_media mdl-card--raised"' +
    '<img src="' + photoUrl + '">' +
    '</div>' +
    '</div>';

console.log(html);

//refactoring: utiliza template string y variables en ${}
var html =
    `<div class="mdl-card mdl-card--raised"
    <div class="mdl-card__title">${title}</div>
    <div class="mdl-card_media mdl-card--raised"
    <img src="${photoUrl}">
    </div>
    </div>`;

console.log(html);

