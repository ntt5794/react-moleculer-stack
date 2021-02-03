"use strict";
const ApiGwService = require("moleculer-web");
const errorHandler = require("../mixins/error.handler.mixin");
const validator = require("../mixins/input.validate.mixin");
const sessionHandler = require("../mixins/session.handler.mixin");
const path = require('path');
module.exports = {
	name: "api",
	mixins: [
		ApiGwService, errorHandler, validator, sessionHandler
	],
	settings: {
		port: process.env.PORT || 3000,
		logRequestParams: "info",
		logResponseData: "debug",
		// Global CORS settings for all routes
		cors: {
			// Configures the Access-Control-Allow-Origin CORS header.
			origin: "*",
			// Configures the Access-Control-Allow-Methods CORS header. 
			methods: ["GET", "OPTIONS", "POST", "PUT", "DELETE"],
			// Configures the Access-Control-Allow-Headers CORS header.
			allowedHeaders: [],
			// Configures the Access-Control-Expose-Headers CORS header.
			exposedHeaders: [],
			// Configures the Access-Control-Allow-Credentials CORS header.
			credentials: false,
			// Configures the Access-Control-Max-Age CORS header.
			maxAge: 3600
		},
		routes: [{
			path: "products",
			aliases: {
				"GET /": "products.list",
				// Uncomment to use adapter built-in paginated list from API gateway
				// "GET list" (req, res) {
				// 	let { page = 1, pageSize = 10, sort = 'createdAt'} = req.query;
				// 	req.$service.broker.call("products.list", { page, pageSize, sort, fields}).then(result => {
				// 		res.setHeader('Content-Type', 'application/json');
				// 		res.end(JSON.stringify(result));
				// 		return result;
				// 	});
				// },

				// Paginated List action defined in products.service
				"GET list": "products.paginateList",
				"GET :id": "products.get",
				"POST /": "products.create",
				"PUT :id": "products.update",
				"GET ping": "products.ping"
			},
			// Route CORS settings (overwrite global settings)
			cors: {
				origin: ["*"],
				methods: ["GET", "OPTIONS", "POST"]
			},
			bodyParsers: {
				json: true
			},
			mappingPolicy: "restrict",
			callOptions: {
				timeout: 5000, // 5 seconds timeout on service call
				retryCount: 3 // Retry 3 times on timeout before returning error
			},
			onBeforeCall(ctx, route, req, res) {
				// Request pre-processing todo code here
				if(!this.isUuid(req.headers['session-id'])) {
					this.logger.info('Generating session token');
					req.headers['session-id'] = this.generateSessionId();
				}
				this.logger.info(`Saving session ${req.headers['session-id']} request`)
				this.logSessionData(req);
			},
			onAfterCall(ctx, route, req, res, data) {
				// Request pre-response todo code here
				res.setHeader("session-id", req.headers['session-id']);
				return data;
			}
		}, 
		{
			// List all user request (search, filter, viewing product)
			path: 'reports',
			aliases: {
				"GET list": "reports.paginateList",
				"POST /": "reports.create"
			},
			bodyParsers: {
				json: true
			},
			mappingPolicy: "restrict",
			callOptions: {
				timeout: 5000, // 5 seconds timeout on service call
				retryCount: 3 // Retry 3 times on timeout before returning error
			}
		}],
		assets: {
			folder: path.join(__dirname, "..", "./public"),
			options: {}
		},
		onError(req, res, err) {
			this.handleErr(err, res);
		}
	},
	methods: []
};