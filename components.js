import { getState, getTranslation, setLanguage, setCategory, addToCart, toggleCart, updateQty, getCartTotal, getCartCount } from './store.js';
import { PRODUCTS } from './data.js';

// Helper to sanitize HTML
const html = (strings, ...values) => String.raw({ raw: strings }, ...values);

export const Header = () => {
    const { lang } = getState();
    const t = getTranslation();
    const cartCount = getCartCount();

    return html`
        <header class="glass-header">
            <div class="container flex justify-between items-center">
                <div class="flex items-center gap-sm">
                    <h1 class="text-gold" style="font-size: 1.5rem;">Lavash</h1>
                </div>

                <div class="flex items-center gap-sm">
                    <!-- Lang Switcher -->
                    <select onchange="window.app.setLanguage(this.value)" 
                            class="glass-panel" 
                            style="color: white; border: none; padding: 5px; border-radius: 8px; outline: none;">
                        <option value="az" ${lang === 'az' ? 'selected' : ''}>AZ</option>
                        <option value="en" ${lang === 'en' ? 'selected' : ''}>EN</option>
                        <option value="ru" ${lang === 'ru' ? 'selected' : ''}>RU</option>
                    </select>

                    <button class="btn btn-icon glass-panel" onclick="window.app.toggleCart()">
                        <i data-lucide="shopping-bag"></i>
                        ${cartCount > 0 ? html`<span style="position: absolute; top: 0; right: 0; background: var(--secondary); width: 8px; height: 8px; border-radius: 50%;"></span>` : ''}
                    </button>
                </div>
            </div>
        </header>
    `;
};

export const Hero = () => {
    const t = getTranslation();
    return html`
        <div class="container mb-lg fade-in" style="margin-top: 2rem;">
            <div class="glass-card" style="text-align: center; padding: 3rem 1.5rem; background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1541544744-378ca6e9391b?q=80&w=1000&auto=format&fit=crop'); background-size: cover; background-position: center;">
                <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: white; text-shadow: 0 4px 10px rgba(0,0,0,0.5);">Lavash Food</h2>
                <p style="color: rgba(255,255,255,0.9); font-size: 1.1rem; margin-bottom: 1.5rem;">${t.slogan}</p>
                <button class="btn btn-primary" onclick="document.getElementById('menu').scrollIntoView({behavior: 'smooth'})">
                    ${t.menu} <i data-lucide="arrow-down" size="16"></i>
                </button>
            </div>
        </div>
    `;
};

export const CategoryFilter = () => {
    const { activeCategory, lang } = getState();
    const t = getTranslation();

    const categories = ['all', 'doner', 'combos', 'drinks'];

    return html`
        <div class="container mb-md">
            <div class="category-scroll">
                ${categories.map(cat => html`
                    <button class="chip ${activeCategory === cat ? 'active' : ''}" 
                            onclick="window.app.setCategory('${cat}')">
                        ${t.categories[cat]}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
};

export const ProductList = () => {
    const { activeCategory, lang } = getState();

    const filtered = activeCategory === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === activeCategory);

    return html`
        <div id="menu" class="container mb-lg" style="padding-bottom: 100px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px;">
                ${filtered.map(product => html`
                    <div class="glass-card product-card fade-in" onclick="window.app.addToCart(${product.id})">
                        <div class="product-image">
                            <img src="${product.image}" loading="lazy" alt="${product.name[lang]}">
                        </div>
                        <div style="padding: 4px;">
                            <h3 style="font-size: 1rem; margin-bottom: 4px;">${product.name[lang]}</h3>
                            <p class="text-sm" style="color: var(--text-secondary); margin-bottom: 8px; height: 3em; overflow: hidden;">${product.desc[lang]}</p>
                            <div class="flex justify-between items-center">
                                <span class="text-gold" style="font-weight: 600;">₼${product.price.toFixed(2)}</span>
                                <button class="btn btn-icon" style="background: rgba(255,255,255,0.1); padding: 6px;">
                                    <i data-lucide="plus" size="16"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};

export const CartBar = () => {
    const { cart, isCartOpen } = getState();
    const t = getTranslation();
    const total = getCartTotal();
    const count = getCartCount();

    if (count === 0) return '';

    return html`
        <div class="cart-bar visible" onclick="window.app.toggleCart(true)">
            <div class="flex items-center gap-sm">
                <div style="background: #000; color: #fff; padding: 4px 10px; border-radius: 50%; font-size: 0.9rem; font-weight: bold;">${count}</div>
                <span style="font-weight: 600;">${t.cart}</span>
            </div>
            <span style="font-weight: 600;">₼${total.toFixed(2)}</span>
        </div>
    `;
};

export const CartModal = () => {
    const { cart, isCartOpen, lang } = getState();
    const t = getTranslation();
    const total = getCartTotal();

    if (!isCartOpen) return '';

    return html`
        <div class="glass-panel" style="position: fixed; inset: 0; z-index: 999; display: flex; flex-direction: column; animation: fadeIn 0.3s ease;">
            <div class="container flex-col" style="height: 100%; padding-top: 20px;">
                <div class="flex justify-between items-center mb-md">
                    <h2>${t.cart}</h2>
                    <button class="btn btn-icon" onclick="window.app.toggleCart(false)">
                        <i data-lucide="x"></i>
                    </button>
                </div>

                <div style="flex: 1; overflow-y: auto;">
                    ${cart.length === 0 ? html`<p style="text-align: center; color: var(--text-secondary); margin-top: 40px;">${t.emptyCart}</p>` : ''}
                    
                    ${cart.map(item => html`
                        <div class="glass-card mb-sm flex justify-between items-center">
                            <div class="flex gap-sm items-center">
                                <img src="${item.image}" style="width: 50px; height: 50px; border-radius: 8px; object-fit: cover;">
                                <div>
                                    <h4 style="font-size: 0.9rem;">${item.name[lang]}</h4>
                                    <span class="text-gold">₼${(item.price * item.qty).toFixed(2)}</span>
                                </div>
                            </div>
                            <div class="flex items-center gap-sm glass-panel" style="padding: 4px; border-radius: 8px;">
                                <button class="btn btn-icon" style="padding: 4px;" onclick="window.app.updateQty(${item.id}, -1)"><i data-lucide="minus" size="14"></i></button>
                                <span style="font-size: 0.9rem; min-width: 20px; text-align: center;">${item.qty}</span>
                                <button class="btn btn-icon" style="padding: 4px;" onclick="window.app.updateQty(${item.id}, 1)"><i data-lucide="plus" size="14"></i></button>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div style="padding: 20px 0; border-top: 1px solid var(--border-glass);">
                    <div class="flex justify-between mb-md">
                        <span style="color: var(--text-secondary);">${t.total}</span>
                        <span class="text-gold" style="font-size: 1.5rem; font-weight: 600;">₼${total.toFixed(2)}</span>
                    </div>
                    <button class="btn btn-primary" style="width: 100%; justify-content: center;">
                        ${t.checkout}
                    </button>
                </div>
            </div>
        </div>
    `;
};
