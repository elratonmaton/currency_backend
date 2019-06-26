"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var category_entity_1 = require("./category.entity");
var brand_entity_1 = require("./brand.entity");
var store_entity_1 = require("./store.entity");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "image", void 0);
    __decorate([
        typeorm_1.Column({ length: 50 }),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ length: 50 }),
        __metadata("design:type", String)
    ], Product.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "unit_price", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "description", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return category_entity_1.Category; }, function (category) { return category.products; }),
        __metadata("design:type", category_entity_1.Category)
    ], Product.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return brand_entity_1.Brand; }, function (brand) { return brand.products; }),
        __metadata("design:type", brand_entity_1.Brand)
    ], Product.prototype, "brand", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return store_entity_1.Store; }, function (store) { return store.products; }),
        __metadata("design:type", store_entity_1.Store)
    ], Product.prototype, "store", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.entity.js.map