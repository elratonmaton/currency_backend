"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_1 = require("./auth");
var user_1 = require("./user");
var category_1 = require("./category");
var brand_1 = require("./brand");
var store_1 = require("./store");
var product_1 = require("./product");
var routes = express_1.Router();
routes.use("/auth", auth_1.default);
routes.use("/user", user_1.default);
routes.use("/category", category_1.default);
routes.use("/brand", brand_1.default);
routes.use("/store", store_1.default);
routes.use("/product", product_1.default);
exports.default = routes;
//# sourceMappingURL=index.js.map