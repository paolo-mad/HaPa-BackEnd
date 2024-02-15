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
    createProduct: async (product_name: string, price: string, stock_quantity: number, category_id: number) => {
        const [result, metadata] = await connection.query(`INSERT INTO products (product_name, price, stock_quantity, category_id) VALUES ('${product_name}', '${price}', '${stock_quantity}','${category_id}')`);
        return result;
    },
    updateProduct: async (id: string, product_name: string, price: number, stock_quantity: number, category_id: number) => {
        const [result, metadata] = await connection.query(`UPDATE products SET product_name = '${product_name}', price = '${price}', stock_quantity = '${stock_quantity}', 'category_id = '${category_id}' WHERE product_id = ${id}`);
        return result;
    },
    deleteProduct: async (id: string) => {
        const [result, metadata] = await connection.query(`DELETE FROM products WHERE product_id = ${id}`);
        return result;
    },

}

export default ProductModel;
