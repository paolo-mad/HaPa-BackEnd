"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const promise_1 = require("mysql2/promise");
const CONFIG = {
    host: 'localhost',
    // port: 3360,
    user: 'root',
    password: 'Villaverde24$',
    database: 'cheesy',
};
exports.connection = (0, promise_1.createPool)(CONFIG);
