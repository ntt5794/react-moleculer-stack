"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;
const requestModelDefinition = require("./request.model.def");
let RequestSchema = new Schema({...requestModelDefinition}, {
    timestamps: {
        createdAt: 'createdAt',
        updatedAt: 'updatedAt'
    }
});

RequestSchema.index({
    "url": "text"
});

module.exports = mongoose.model("Request", RequestSchema);