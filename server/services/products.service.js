const Product = require('../models/product.model');
const DbAdapter = require('../mixins/db.adapter.mixin');
const fake = require("fakerator")();
const _ = require('lodash');
const { SAMPLE_IMAGES, PAGESIZE } = require('../constants');
module.exports = {
    name: 'products',
    mixins: [DbAdapter],
    settings: {
        fields: ["_id", "name", "description", "price", "serial", "image", "type", "createdAt"],
    },
    model: Product,
    actions: {
        // Health Check API
        ping: {
            handler(ctx) {
                return Promise.resolve({}).then(() => 'pong');
            }
        },
        // Paginated List
        paginateList: {
            handler(ctx) {
                let { page = 1, pageSize = PAGESIZE, sort = 'createdAt', match = '' } = ctx.params;
                return ctx.call('products.list', {page, pageSize, sort, query: { name: { $regex: match, $options: 'i' } }});
            }
        }
    },
    methods: {
        async initializeProducts() {
            try {
                this.logger.info('------------Initializing Products---------------');
                const products = await this.adapter.insertMany(_.times(100, () => {
                    const product = {
                        name: fake.lorem.word(),
                        description:  fake.lorem.sentence(),
                        serial: fake.misc.uuid(),
                        price: fake.random.number(50000, 5000000),
                        image: SAMPLE_IMAGES[fake.random.number(0,3)],
                        type: fake.lorem.word()
                    };
                    return product;
                }));
                this.logger.info(`Initialized ${products.length} products.`);
                return this.clearCache();
            } catch(err) {
                console.log(err);
            }
        }
    },
    async afterConnected() {
        const count = await this.adapter.count();
        if(count == 0) {
            return this.initializeProducts();
        }
    }
}