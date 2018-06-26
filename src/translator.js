"use strict";

const Translate = require('@google-cloud/translate');
// const async = require('async');

let TranslateService = {};
let translate = new Translate({
    keyFilename: './src/translator.conf.json',
});

TranslateService.translateText = (content, targetLang, next) => {

    return new Promise((resolve, reject) => {

        let calls = [];

        calls.push(() => translate(content, targetLang));

        if (err) {
            reject(console.log('ERROR'));
        } else {
            resolve(results => calls(null, results[0]));
        }

    });

}

translate('quiero trabajar con los mejores', 'en')
    .then(resp => {
        console.log(resp.results);
    })
    .catch(err => {
        console.log(err);
    });



module.exports = TranslateService;