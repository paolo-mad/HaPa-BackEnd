import {Request,Response} from 'express'
import ProductModel from '../models/ProductModel'




const ProductController = {
    getAllProducts: async (req: Request, res: Response) => {
        try {
            const products = await ProductModel.getAllProducts();
            res.json(products);
        }
        catch (error){
            console.log(error)
        }
    },
    getProduct: async (req: Request, res: Response) => {
        try {
            const id= req.params.id;
            const product = await ProductModel.getProduct(id);
            if (!Array.isArray(product) || product.length === 0) {
                res.status(404).json({ message: `Product with id ${id} not found` });
                return;
            }
            res.json(product)
        }
        catch (error) {
            console.log(error)
        }
    },
    addProduct: async (req: Request, res: Response) => {     
      const { product_name, price, stock_quantity, category_id } = req.body
      console.log(req.body)
         if( !product_name || !price || !stock_quantity || !category_id) {
            return res.status(400).json({ message: 'Please provide product name, price and stock quantity' });
        }

        (await ProductModel.createProduct(product_name, price, stock_quantity, category_id));

    },
    updateProduct: async (req: Request, res: Response) => {    
        const id = req.params.id;
        const { product_name, price, stock_quantity, category_id} = req.body
        if (!product_name || !price || !stock_quantity || category_id) {
            res.status(400).json({ message: 'Please provide product name, price and stock quantity' });
            return;
        }
        await ProductModel.updateProduct(id, product_name, price, stock_quantity, category_id);

    },
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await ProductModel.deleteProduct(id);
            return;
        } catch (error) {
            console.log(error)
        }
    },
}

export default ProductController














