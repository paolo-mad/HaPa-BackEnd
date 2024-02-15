import { connection } from "../database/config";

const ProductModel = {
    getAllProducts: async () => {
        const [result, metadata] = await connection.query('SELECT * FROM products');
        return result;
    },
    getProduct: async (id: string) => {
        const [result, metadata] = await connection.query(`SELECT * FROM products WHERE product_id = ${id}`);
        return result;
    },
    createProduct: async (product_name: string, price: number, stock_quantity: number) => {
        const [result, metadata] = await connection.query(`INSERT INTO products (product_name, price, stock_quantity) VALUES ('${product_name}', '${price}', ${stock_quantity})`);
        return result;
    },
    updateProduct: async (id: string, product_name: string, price: number, stock_quantity: number) => {
        const [result, metadata] = await connection.query(`UPDATE products SET product_name = '${product_name}', price = '${price}', stock_quantity = ${stock_quantity} WHERE product_id = ${id}`);
        return result;
    },
    deleteProduct: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM products WHERE product_id = ${id}`);
        return result;
    },

}

export default ProductModel;
