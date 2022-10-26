const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

exports.getSymbolQuote = async (req, res) => { 
    const config = {
        method: 'get',
        url: process.env.API_URL + 'quotes/latest?symbol=' + req.query.symbol,
        headers: { 
            'X-CMC_PRO_API_KEY': process.env.API_KEY, 
            'Accept': '*/*'
        }
    };

    axios(config)
        .then(function (response) { 
        const result = response.data.data[req.query.symbol][0].quote.USD;

        res.status(200).send(result);
    })
        .catch(function (error) {
            console.log(error);
            res.status(400).send(error);
    });
}