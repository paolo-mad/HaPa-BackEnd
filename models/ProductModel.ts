import { connection } from "../database/config";

const ProductModel = {
    getAllProducts: async () => {
        const [result] = await connection.query('SELECT * FROM products');
        return result;
    },
    getProduct: async (id: string) => {
        const [result] = await connection.query(`SELECT * FROM products WHERE product_id = ?`, [id]);
        return result;
    },
    createProduct: async (product_name: string, price: string, stock_quantity: number, category_id: number) => {
        const query = 'INSERT INTO products (product_name, price, stock_quantity, category_id) VALUES (?, ?, ?, ?)';
        const values = [product_name, price, stock_quantity, category_id];
        const [result] = await connection.query(query, values);
        return result;
      },
    updateProduct: async (id: string, product_name: string, price: number, stock_quantity: number, category_id: number) => {
        const [result] = await connection.query('UPDATE products SET product_name = ?, price = ?, stock_quantity = ?, category_id = ? WHERE product_id = ?', [product_name, price, stock_quantity, category_id, id]);
        return result;
    }, 
    deleteProduct: async (id: string) => {
        const [result] = await connection.query(`DELETE FROM products WHERE product_id = ?`,[id]);
        return result;
    },
}

export default ProductModel;


