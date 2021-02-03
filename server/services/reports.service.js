const DbAdapter = require('../mixins/db.adapter.mixin');
const RequestModel = require('../models/request.model');
const { PAGESIZE } = require('../constants');
module.exports = {
    name: 'reports',
    mixins: [DbAdapter],
    settings: {
        fields: ["_id", "session_id", "url", "meta", "createdAt"],
    },
    model: RequestModel,
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
                let { page = 1, pageSize = PAGESIZE, sort = 'session_id', match = '' } = ctx.params;
                return ctx.call('reports.list', {page, pageSize, sort, query: { 
                    $or: [ 
                        { session_id: { $regex: match, $options: 'i' } }, 
                        { 'meta.params.id': { $regex: match, $options: 'i' } }, 
                        { url: { $regex: match, $options: 'i' } } 
                    ] 
                }});
            }
        }
    }
}