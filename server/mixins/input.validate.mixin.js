"use strict";
const URL = require('url');

module.exports = {
    methods: {
        validateInput(input, model) {
            let schemaInst = new model({
                ...input
            });
            let err = schemaInst.validateSync();
            if (err) {
                let err = new Error("Invalid Input");
                err.code = 400;
                return Promise.reject(err);
            }
            return input;
        },
        instantiateModel(model) {
            return new model();
        }
    }
}