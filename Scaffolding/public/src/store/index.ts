// src/store/index.ts
import { ProductType, CartItemType } from '../types/products';

interface State {
    products: ProductType[];
    cart: CartItemType[];
}

let state: State = {
    products: [],
    cart: [],
};

const subscribe = (listener: Function) => {
    // Lógica para subscribirse a cambios de estado
};

const getState = () => state;

const addToCart = (product: ProductType) => {
    // Lógica para agregar el producto al carrito
    const cartItem: CartItemType = { ...product, quantity: 1 }; // Inicializa la cantidad
    state.cart.push(cartItem);
    // Lógica para guardar en localStorage si es necesario
};

const setProducts = (products: ProductType[]) => {
    state.products = products;
    // Lógica para guardar en localStorage si es necesario
};

export { subscribe, getState, addToCart, setProducts };
