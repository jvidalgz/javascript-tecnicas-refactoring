let View = {
    render() {
        /**
         * Obtiene data desde json endpoint
         * @type {string}
         */
        var url = `http://localhost:3000/api/${this.accountType}/${this.accountId}`;
        this._fetchData(url)
            // transforma data
            .then(processData)
            // render html
            .then(renderHtml);


    },

    _fetchData(url){
        return Promise.resolve([/** Some data **/])
    }
}

function processData(data) {

    var previousTransactions = data
        .filter(x => {
            return x.timestamp < Date.now();
        })
        .map(x => {
            return {
                type: x.transactionType,
                amount: x.transactionAmount,
                timestamp: x.timestamp
            };
        });

    return previousTransactions;
}

function renderHtml(transactions){
    var rows = transactions.map(x => {
        return `<tr>
                                <td>${x.type}</td>
                                <td>${x.amount}</td>
                            </tr>`;
    });
    var html = `
                <table>
                    ${rows.join('')}
                <table>`;

    $('#container').html(html);
}