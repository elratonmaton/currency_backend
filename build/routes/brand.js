"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var BrandController_1 = require("../controller/BrandController");
var checkJwt_1 = require("../middlewares/checkJwt");
var router = express_1.Router();
router.get("/", [checkJwt_1.checkJwt], BrandController_1.default.listAll);
router.post("/", [checkJwt_1.checkJwt], BrandController_1.default.create);
router.put("/", [checkJwt_1.checkJwt], BrandController_1.default.update);
router.delete("/", [checkJwt_1.checkJwt], BrandController_1.default.delete);
exports.default = router;
//# sourceMappingURL=brand.js.map