"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductController_1 = __importDefault(require("../controllers/ProductController"));
const ProductRouter = (0, express_1.Router)();
ProductRouter.route('/').get(ProductController_1.default.getAllProducts);
ProductRouter.route('/:id').get(ProductController_1.default.getProduct);
ProductRouter.route('/').post(ProductController_1.default.addProduct);
ProductRouter.route('/:id').put(ProductController_1.default.updateProduct);
ProductRouter.route('/:id').delete(ProductController_1.default.deleteProduct);
exports.default = ProductRouter;
