// src/services/getProducts.ts
import { ProductType } from '../types/products';

export const getProducts = async (): Promise<ProductType[]> => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const products: ProductType[] = await response.json(); // Asegúrate de que el formato de respuesta es correcto
        return products; // Retorna el array de productos
    } catch (error) {
        console.error("Error fetching products:", error);
        return []; // Retornar un array vacío en caso de error
    }
};
