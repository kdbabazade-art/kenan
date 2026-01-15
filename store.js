import { TRANSLATIONS } from './data.js';

// State
const state = {
    lang: 'az',
    cart: [],
    activeCategory: 'all',
    isCartOpen: false
};

// Event Bus
const listeners = new Set();

export const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
};

const notify = () => {
    listeners.forEach(listener => listener(state));
};

// Actions
export const setLanguage = (lang) => {
    state.lang = lang;
    notify();
};

export const setCategory = (category) => {
    state.activeCategory = category;
    notify();
};

export const addToCart = (product) => {
    const existing = state.cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty++;
    } else {
        state.cart.push({ ...product, qty: 1 });
    }
    notify();

    // Haptic feedback simulation
    if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(50);
    }
};

export const removeFromCart = (id) => {
    state.cart = state.cart.filter(item => item.id !== id);
    notify();
};

export const updateQty = (id, delta) => {
    const item = state.cart.find(i => i.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            removeFromCart(id);
        } else {
            notify();
        }
    }
};

export const toggleCart = (isOpen) => {
    state.isCartOpen = isOpen !== undefined ? isOpen : !state.isCartOpen;
    notify();
};

// Getters
export const getState = () => state;
export const getTranslation = () => TRANSLATIONS[state.lang];
export const getCartTotal = () => state.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
export const getCartCount = () => state.cart.reduce((sum, item) => sum + item.qty, 0);
