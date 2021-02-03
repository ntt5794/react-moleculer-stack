"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const productModelDefinition = require("./product.model.def");
let ProductSchema = new Schema({ ...productModelDefinition },{
        timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt"
    }
});

ProductSchema.index({ name: 1, serial: 1 }, { unique: true });

module.exports = mongoose.model("Product", ProductSchema);