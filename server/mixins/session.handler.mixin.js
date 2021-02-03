const RequestModel = require('../models/request.model');
const { uuid, isUuid } = require('uuidv4');
module.exports = {
    methods: {
        // Create temporary session_id for incoming client
        generateSessionId() {
            return uuid();
        },
        isUuid(id) {
            return isUuid(id);
        },
        // Save incoming request info with session_id
        logSessionData(req) {
            req.$service.broker.call('reports.create', { session_id: req.headers['session-id'], url: req.originalUrl || req.url, meta: { params: req.$params, body: req.body, query: req.query }});
        }
    }
}