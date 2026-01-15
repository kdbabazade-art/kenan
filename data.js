export const TRANSLATIONS = {
    az: {
        slogan: "Ən dadlı lavaşlar, anında qapınızda",
        menu: "Menyu",
        cart: "Səbət",
        add: "Əlavə et",
        total: "Cəmi",
        checkout: "Sifarişi rəsmiləşdir",
        emptyCart: "Səbətiniz boşdur",
        categories: {
            all: "Hamısı",
            doner: "Dönər",
            combos: "Kombo",
            drinks: "İçkilər"
        }
    },
    en: {
        slogan: "Delicious lavash, instantly at your door",
        menu: "Menu",
        cart: "Cart",
        add: "Add",
        total: "Total",
        checkout: "Checkout",
        emptyCart: "Your cart is empty",
        categories: {
            all: "All",
            doner: "Doner",
            combos: "Combos",
            drinks: "Drinks"
        }
    },
    ru: {
        slogan: "Вкуснейший лаваш, мгновенно у двери",
        menu: "Меню",
        cart: "Корзина",
        add: "Добавить",
        total: "Итого",
        checkout: "Оформить",
        emptyCart: "Корзина пуста",
        categories: {
            all: "Все",
            doner: "Донер",
            combos: "Комбо",
            drinks: "Напитки"
        }
    }
};

export const PRODUCTS = [
    {
        id: 1,
        category: "doner",
        image: "https://images.unsplash.com/photo-1662998399587-8898952dc794?q=80&w=800&auto=format&fit=crop",
        price: 4.50,
        name: { az: "Toyuq Dönər Lavaş", en: "Chicken Doner Wrap", ru: "Куриный Донер" },
        desc: { az: "Xüsusi sous, pomidor, xiyar", en: "Special sauce, tomato, cucumber", ru: "Спец. соус, помидор, огурец" }
    },
    {
        id: 2,
        category: "doner",
        image: "https://images.unsplash.com/photo-1561651823-34febf5a90aa?q=80&w=800&auto=format&fit=crop",
        price: 5.50,
        name: { az: "Ət Dönər Lavaş", en: "Beef Doner Wrap", ru: "Мясной Донер" },
        desc: { az: "Təzə dana əti, göyərti", en: "Fresh beef, greens", ru: "Свежая говядина, зелень" }
    },
    {
        id: 3,
        category: "combos",
        image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
        price: 9.00,
        name: { az: "Kombo Menyu 1", en: "Combo Menu 1", ru: "Комбо Меню 1" },
        desc: { az: "Toyuq dönər + Fri + Kola", en: "Chicken wrap + Fries + Coke", ru: "Куриный донер + Фри + Кола" }
    },
    {
        id: 4,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop",
        price: 1.50,
        name: { az: "Coca Cola 330ml", en: "Coca Cola 330ml", ru: "Coca Cola 330мл" },
        desc: { az: "Sərinləşdirici içki", en: "Soft drink", ru: "Прохладительный напиток" }
    },
    {
        id: 5,
        category: "doner",
        image: "https://images.unsplash.com/photo-1529042410759-befb1204b465?q=80&w=800&auto=format&fit=crop",
        price: 5.00,
        name: { az: "Dönər Çörəkdə", en: "Doner in Bread", ru: "Донер в хлебе" },
        desc: { az: "Xırtıldayan çörək, bol ət", en: "Crispy bread, lots of meat", ru: "Хрустящий хлеб, много мяса" }
    },
    {
        id: 6,
        category: "drinks",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=800&auto=format&fit=crop",
        price: 2.00,
        name: { az: "Ayran", en: "Ayran", ru: "Айран" },
        desc: { az: "Ev üsulu nanəli", en: "Homemade with mint", ru: "Домашний с мятой" }
    }
];
