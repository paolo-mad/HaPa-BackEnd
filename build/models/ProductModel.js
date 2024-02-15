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
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../database/config");
const ProductModel = {
    getAllProducts: () => __awaiter(void 0, void 0, void 0, function* () {
        const [result, metadata] = yield config_1.connection.query('SELECT * FROM products');
        return result;
    }),
    getProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const [result, metadata] = yield config_1.connection.query(`SELECT * FROM products WHERE product_id = ${id}`);
        return result;
    }),
    createProduct: (product_name, price, stock_quantity) => __awaiter(void 0, void 0, void 0, function* () {
        const [result, metadata] = yield config_1.connection.query(`INSERT INTO products(product_name, price, stock_quantity) VALUES ('${product_name}', '${price}', ${stock_quantity})`);
        return result;
    }),
    updateProduct: (id, product_name, price, stock_quantity) => __awaiter(void 0, void 0, void 0, function* () {
        const [result, metadata] = yield config_1.connection.query(`UPDATE products SET product_name = '${product_name}', price = '${price}', stock_quantity = ${stock_quantity} WHERE product_id = ${id}`);
        return result;
    }),
    deleteProduct: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const [result, metadata] = yield config_1.connection.query(`DELETE FROM products WHERE product_id = ${id}`);
        return result;
    }),
};
exports.default = ProductModel;
