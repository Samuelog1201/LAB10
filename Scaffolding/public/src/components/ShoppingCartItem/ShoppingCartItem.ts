// src/components/ShoppingCartItem/ShoppingCartItem.ts
import { CartItemType } from '../../types/products';

class ShoppingCartItem extends HTMLElement {
    image?: string;
    productTitle?: string;
    price?: number; // Cambiado a number

    static get observedAttributes() {
        return ['image', 'productTitle', 'price'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        switch (name) {
            case 'image':
                this.image = newValue;
                break;
            case 'productTitle':
                this.productTitle = newValue;
                break;
            case 'price':
                this.price = parseFloat(newValue); // Convertir a number
                break;
            default:
                break;
        }
        this.render();
    }

    connectedCallback() {
        this.render();
    }

    private render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    /* Agrega tus estilos aquí */
                </style>
                <div>
                    <img src="${this.image || ''}" alt="${this.productTitle || ''}">
                    <h2>${this.productTitle || 'No title'}</h2>
                    <p>Price: ${this.price !== undefined ? `$${this.price.toFixed(2)}` : 'N/A'}</p>
                </div>
            `;
        }
    }
}

customElements.define("shopping-cart-item", ShoppingCartItem);
export default ShoppingCartItem;
