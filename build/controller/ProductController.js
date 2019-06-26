"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var class_validator_1 = require("class-validator");
var product_entity_1 = require("../entity/product.entity");
var brand_entity_1 = require("../entity/brand.entity");
var category_entity_1 = require("../entity/category.entity");
var store_entity_1 = require("../entity/store.entity");
var ProductController = /** @class */ (function () {
    function ProductController() {
    }
    ProductController.listAll = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var repository, data;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    repository = typeorm_1.getRepository(product_entity_1.Product);
                    return [4 /*yield*/, repository.find({
                            select: ["id", "image", "name", "code", "price", "unit_price", "quantity", "description"],
                            relations: ["category", "Brand", "store"]
                        })];
                case 1:
                    data = _a.sent();
                    res.send(data);
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.create = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var _a, name, image, code, price, unit_price, quantity, description, category, brand, store, brandRepository, brandEntity, categoryRepository, categoryEntity, storeRepository, storeEntity, data, errors, repository, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, name = _a.name, image = _a.image, code = _a.code, price = _a.price, unit_price = _a.unit_price, quantity = _a.quantity, description = _a.description, category = _a.category, brand = _a.brand, store = _a.store;
                    brandRepository = typeorm_1.getRepository(brand_entity_1.Brand);
                    return [4 /*yield*/, brandRepository.findOneOrFail(brand)];
                case 1:
                    brandEntity = _b.sent();
                    categoryRepository = typeorm_1.getRepository(category_entity_1.Category);
                    return [4 /*yield*/, categoryRepository.findOneOrFail(category)];
                case 2:
                    categoryEntity = _b.sent();
                    storeRepository = typeorm_1.getRepository(store_entity_1.Store);
                    return [4 /*yield*/, storeRepository.findOneOrFail(store)];
                case 3:
                    storeEntity = _b.sent();
                    data = new product_entity_1.Product();
                    data.name = name;
                    data.image = image;
                    data.code = code;
                    data.price = price;
                    data.unit_price = unit_price;
                    data.quantity = quantity;
                    data.description = description;
                    data.brand = brandEntity;
                    data.category = categoryEntity;
                    data.store = storeEntity;
                    return [4 /*yield*/, class_validator_1.validate(data)];
                case 4:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    repository = typeorm_1.getRepository(product_entity_1.Product);
                    _b.label = 5;
                case 5:
                    _b.trys.push([5, 7, , 8]);
                    return [4 /*yield*/, repository.save(data)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7:
                    e_1 = _b.sent();
                    res.status(409).send("Product cannot be saved");
                    return [2 /*return*/];
                case 8:
                    //If all ok, send 201 response
                    res.status(201).send("Product created");
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.update = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, _a, name, image, code, price, unit_price, quantity, description, category, brand, store, brandRepository, brandEntity, categoryRepository, categoryEntity, storeRepository, storeEntity, repository, data, error_1, errors, e_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    id = req.params.id;
                    _a = req.body, name = _a.name, image = _a.image, code = _a.code, price = _a.price, unit_price = _a.unit_price, quantity = _a.quantity, description = _a.description, category = _a.category, brand = _a.brand, store = _a.store;
                    brandRepository = typeorm_1.getRepository(brand_entity_1.Brand);
                    return [4 /*yield*/, brandRepository.findOneOrFail(brand)];
                case 1:
                    brandEntity = _b.sent();
                    categoryRepository = typeorm_1.getRepository(category_entity_1.Category);
                    return [4 /*yield*/, categoryRepository.findOneOrFail(category)];
                case 2:
                    categoryEntity = _b.sent();
                    storeRepository = typeorm_1.getRepository(store_entity_1.Store);
                    return [4 /*yield*/, storeRepository.findOneOrFail(store)];
                case 3:
                    storeEntity = _b.sent();
                    repository = typeorm_1.getRepository(product_entity_1.Product);
                    _b.label = 4;
                case 4:
                    _b.trys.push([4, 6, , 7]);
                    return [4 /*yield*/, repository.findOneOrFail(id)];
                case 5:
                    data = _b.sent();
                    return [3 /*break*/, 7];
                case 6:
                    error_1 = _b.sent();
                    //If not found, send a 404 response
                    res.status(404).send("Brand not found");
                    return [2 /*return*/];
                case 7:
                    //Validate the new values on model
                    data.name = name;
                    data.image = image;
                    data.code = code;
                    data.price = price;
                    data.unit_price = unit_price;
                    data.quantity = quantity;
                    data.description = description;
                    data.brand = brandEntity;
                    data.category = categoryEntity;
                    data.store = storeEntity;
                    return [4 /*yield*/, class_validator_1.validate(data)];
                case 8:
                    errors = _b.sent();
                    if (errors.length > 0) {
                        res.status(400).send(errors);
                        return [2 /*return*/];
                    }
                    _b.label = 9;
                case 9:
                    _b.trys.push([9, 11, , 12]);
                    return [4 /*yield*/, repository.save(data)];
                case 10:
                    _b.sent();
                    return [3 /*break*/, 12];
                case 11:
                    e_2 = _b.sent();
                    res.status(409).send("Product cannot be saved");
                    return [2 /*return*/];
                case 12:
                    //After all send a 204 (no content, but accepted) response
                    res.status(204).send();
                    return [2 /*return*/];
            }
        });
    }); };
    ProductController.delete = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
        var id, repository, data, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    repository = typeorm_1.getRepository(product_entity_1.Product);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, repository.findOneOrFail(id)];
                case 2:
                    data = _a.sent();
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    res.status(404).send("Product not found");
                    return [2 /*return*/];
                case 4:
                    repository.delete(id);
                    res.status(204).send();
                    return [2 /*return*/];
            }
        });
    }); };
    return ProductController;
}());
;
exports.default = ProductController;
//# sourceMappingURL=ProductController.js.map