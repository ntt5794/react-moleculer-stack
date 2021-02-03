const MongooseAdapter = require("moleculer-db-adapter-mongoose");
const DbService = require("moleculer-db");

module.exports = {
    mixins: [DbService],
    adapter: new MongooseAdapter(process.env.MONGO_URI || "mongodb://localhost/iCommerce")
}