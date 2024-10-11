export interface ProductType {
    id: number; // Asegúrate de que este tipo coincida con la respuesta de la API
    title: string;
    description: string;
    category: string;
    image: string;
    price: number; // Cambia a 'number' si la API devuelve un número
    rating: {
        rate: number;
        count: number;
    };
}

// Si deseas tener un tipo específico para el carrito, puedes hacerlo así
export interface CartItemType extends ProductType {
    quantity: number; // Para llevar un control de la cantidad en el carrito
}
