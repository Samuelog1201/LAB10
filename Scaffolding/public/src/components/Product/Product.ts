// src/components/Product/Product.ts
import { ProductType } from '../../types/products'; // Asegúrate de que la ruta sea correcta

export enum Attribute {
    "image" = "image",
    "productTitle" = "title",
    "description" = "description",
    "category" = "category",
    "price" = "price",
    "rating" = "rating",
}

class Product extends HTMLElement {
    image?: string;
    productTitle?: string;
    description?: string;
    category?: string;  
    price?: string;
    rating?: string;

    static get observedAttributes() {
        return Object.keys(Attribute); // Esto observará cambios en los atributos del componente
    }

    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    attributeChangedCallback(propName: string, _: string, newValue: string) {
        // Asignar el nuevo valor a la propiedad correspondiente
        switch (propName) {
            case Attribute.image:
                this.image = newValue;
                break;
            case Attribute.productTitle:
                this.productTitle = newValue;
                break;
            case Attribute.description:
                this.description = newValue;
                break;
            case Attribute.category:
                this.category = newValue;
                break;
            case Attribute.price:
                this.price = newValue;
                break;
            case Attribute.rating:
                this.rating = newValue;
                break;
            default:
                break;
        }
        this.render();  // Re-renderizar cada vez que se cambie un atributo
    }

    connectedCallback() {
        this.render();
    }

    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <style>
                    /* Aquí puedes agregar estilos CSS específicos para tu componente */
                </style>
                <section>
                    <img class="image-character" src="${this.image || ''}" alt="${this.productTitle || ''}">
                    <h1>${this.productTitle}</h1>
                    <h2>Description: ${this.description || 'Unknown'}</h2>
                    <h2>Category: ${this.category || 'Unknown'}</h2>
                    <h2>Price: $${this.price || 'Unknown'}</h2>
                    <h2>Rating: ${this.rating || 'Unknown'}</h2>
                    <button class="add-to-cart">Add to Cart</button>
                </section>
            `;

            // Manejar el evento de clic para añadir al carrito
            this.shadowRoot.querySelector('.add-to-cart')?.addEventListener('click', () => {
                this.addToCart();
            });
        }
    }

    private addToCart() {
        // Implementar lógica para añadir el producto al carrito
        console.log(`${this.productTitle} added to cart`);
    }
}

customElements.define("my-product", Product);
export default Product;
