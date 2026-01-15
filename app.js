import { subscribe, getState, setLanguage, setCategory, addToCart, toggleCart, updateQty } from './store.js';
import { Header, Hero, CategoryFilter, ProductList, CartBar, CartModal } from './components.js';
import { PRODUCTS } from './data.js';

// Expose actions to window for HTML event handlers
window.app = {
    setLanguage,
    setCategory,
    addToCart: (id) => {
        const product = PRODUCTS.find(p => p.id === id);
        if (product) addToCart(product);
    },
    toggleCart,
    updateQty
};

const app = document.getElementById('app');
const modalRoot = document.getElementById('modal-root');

function render() {
    // Main App
    app.innerHTML = `
        ${Header()}
        ${Hero()}
        ${CategoryFilter()}
        ${ProductList()}
        ${CartBar()}
    `;

    // Modals
    modalRoot.innerHTML = `
        ${CartModal()}
    `;

    // Re-initialize icons
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Initial Render
render();

// Subscribe to state changes
subscribe(render);
