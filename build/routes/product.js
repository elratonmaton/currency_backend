"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var ProductController_1 = require("../controller/ProductController");
var checkJwt_1 = require("../middlewares/checkJwt");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt], ProductController_1.default.listAll);
router.post("/", [checkJwt_1.checkJwt], ProductController_1.default.create);
router.put("/", [checkJwt_1.checkJwt], ProductController_1.default.update);
router.delete("/", [checkJwt_1.checkJwt], ProductController_1.default.delete);
exports.default = router;
//# sourceMappingURL=product.js.map