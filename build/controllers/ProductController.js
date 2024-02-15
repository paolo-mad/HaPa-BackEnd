"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ProductModel_1 = __importDefault(require("../models/ProductModel"));
const ProductController = {
    getAllProducts: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const products = yield ProductModel_1.default.getAllProducts();
            res.json(products);
        }
        catch (error) {
            console.log(error);
        }
    }),
    getProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const product = yield ProductModel_1.default.getProduct(id);
            if (!Array.isArray(product) || product.length === 0) {
                res.status(404).json({ message: `Product with id ${id} not found` });
                return;
            }
            res.json(product);
        }
        catch (error) {
            console.log(error);
        }
    }),
    addProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { product_name, price, stock_quantity } = req.body;
        if (!product_name || !price || !stock_quantity) {
            res.status(400).json({ message: 'Please provide product name, price and stock quantity' });
            return;
        }
        yield ProductModel_1.default.createProduct(product_name, price, stock_quantity);
    }),
    updateProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const id = req.params.id;
        const { product_name, price, stock_quantity } = req.body;
        if (!product_name || !price || !stock_quantity) {
            res.status(400).json({ message: 'Please provide product name, price and stock quantity' });
            return;
        }
        yield ProductModel_1.default.updateProduct(id, product_name, price, stock_quantity);
    }),
    deleteProduct: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            yield ProductModel_1.default.deleteProduct(id);
        }
        catch (error) {
            console.log(error);
        }
    }),
};
exports.default = ProductController;
