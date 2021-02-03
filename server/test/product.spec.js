const { ServiceBroker } = require("moleculer");
// Load service schema
const ServiceSchema = require("../services/products.service");
describe("Test 'products' actions", () => {
    // Create a service broker
    let broker = new ServiceBroker({ logger: false });
    // Create the actual service
    let service = broker.createService(ServiceSchema);

    // Start the broker. It will also init the service
    beforeAll(() => broker.start());
    // Gracefully stop the broker after all tests
    afterAll(() => broker.stop());

    /** Tests go here **/
    
    describe("Test 'products.ping' action", () => {
        it("should return pong", async () => {
            const result = await broker.call("products.ping");
            expect(result).toEqual('pong');
        });
    });
    describe("Test 'products.paginateList' action", () => {
        it("should return list of product", async () => {
            // call the action
            const result = await broker.call("products.paginateList", {
                match: ''
            });

            // Check the result
            expect(result.rows).not.toBe([]);  
        });
        it("should return empty list", async () => {
            // call the action
            const result = await broker.call("products.paginateList", {
                match: 'really-long-matching-sample-to-make-sure-nothing-can-be-matched'
            });

            // Check the result
            expect(result.rows).toEqual([]);
        });
        it("should return page X", async () => {
            // call the action
            let page = Math.floor(Math.random() * 10);
            const result = await broker.call("products.paginateList", {
                page: page
            });

            // Check the result
            expect(result.page).toEqual(page);
        });
        it("should return pageSize Y", async () => {
            // call the action
            let page = Math.floor(Math.random() * 100) + 1;
            const result = await broker.call("products.paginateList", {
                page: page
            });

            // Check the result
            expect(result.page).toEqual(page);
        });
    });
});