import {Request,Response} from 'express'
import ProductModel from '../models/ProductModel'

type RequestBodyType = {
    product_name: string;
    price: number;
    stock_quantity: number;
};


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
            const id = req.params.id;
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
            
      const { product_name, price, stock_quantity } = req.body ??{}
        if (!product_name || !price || !stock_quantity) {
            res.status(400).json({ message: 'Please provide product name, price and stock quantity' });
            return;
        }
        await ProductModel.createProduct(product_name, price, stock_quantity);

    },
    updateProduct: async (req: Request, res: Response) => {    
        const id = req.params.id;
        const { product_name, price, stock_quantity} = req.body ??{}
        if (!product_name || !price || !stock_quantity) {
            res.status(400).json({ message: 'Please provide product name, price and stock quantity' });
            return;
        }
        await ProductModel.updateProduct(id, product_name, price, stock_quantity);

    },
    deleteProduct: async (req: Request, res: Response) => {
        try {
            const id = req.params.id;
            await ProductModel.deleteProduct(id);
        } catch (error) {
            console.log(error)
        }
    },
}

export default ProductController














