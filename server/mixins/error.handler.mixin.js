"use strict";

module.exports = {
    methods: {
        handleMongoError(err) {
            if (err.name == "MongoError" && err.code == 11000) {                
                err.message = "Duplicated Insertion";
                err.code = 409;
                return err;
            }
            return err;
        },
        handleErr(err, res) {
            err = this.handleMongoError(err);
            res.setHeader("Content-Type", "text/plain");
            res.writeHead(err.code);
            res.end(JSON.stringify(err.message));
        },
        error(message, code) {
            let err = new Error(message);
            err.code = code;
            return err;
        }

    }
}