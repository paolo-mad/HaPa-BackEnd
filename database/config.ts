import { createPool } from "mysql2/promise";

const CONFIG = {
        host: 'localhost',
        // port: 3360,
        user: 'root',
        password: 'Villaverde24$',
        database: 'cheesy',
    };

export const connection = createPool(CONFIG);



