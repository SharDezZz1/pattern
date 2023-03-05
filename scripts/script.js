const BURGER_MENU = document.querySelector('.burger_menu');
const MOBILE_MENU = document.querySelector('.mobile__menu');
const HEADER = document.querySelector('header');
const MOBILE_MENU_LINKS = document.querySelectorAll('.mobile__menu a');

const switchMobileMenu = () => {
    BURGER_MENU.classList.toggle('active');
    MOBILE_MENU.classList.toggle('active');
    HEADER.classList.toggle('active');
};

BURGER_MENU.addEventListener('click', () => {
    switchMobileMenu();
})

MOBILE_MENU_LINKS.forEach((link) => {
    link.addEventListener('click', () => {
        switchMobileMenu();
    })
})

// showelement on scroll
document.addEventListener('scroll', () => {
    const ELEMENT = document.querySelector('.scroll-up');
    // display scroll up button after 100px
    if (window.scrollY > 20) {
        ELEMENT.classList.add('show');
    } else {
        ELEMENT.classList.remove('show');
    }
})

const FRUITS = [
    {
        id: 1,
        name: 'Apple',
        price: 500,
    },
    {
        id: 2,
        name: 'Orange',
        price: 200,
    },
    {
        id: 3,
        name: 'Banana',
        price: 300,
    }
];

const ELECTRONICS = [
    {
        id: 1,
        name: 'Laptop',
        price: 4000,
    },
    {
        id: 2,
        name: 'Phone',
        price: 2000,
    },
    {
        id: 3,
        name: 'TV',
        price: 3000,
    }
];

const TABS = document.querySelectorAll(".tabs__item");
const CONTENT = document.querySelectorAll(".tabs__content")



let allProducts = [...FRUITS, ...ELECTRONICS];
let count = 0;
allProducts.forEach((item) => {
    count++;
    item.id = count;
})

function renderProducts(content, selector) {
    let html = '';
    content.forEach((product) => {
        const { id, name, price } = product;
        html += `
            <div id="${id}" class="tabs__content_list_card">
                <div class="tabs__content_product_id">${id}</div>
                <p class="tabs__content_product_name">${name}</p>
                <p class="tabs__content_product_price">${price}</p>
        </div>     
        `
    })
    const TABS_CONTENT_ALL = document.querySelector(`#${selector}`);
    TABS_CONTENT_ALL.innerHTML = html;
}

function sortProducts(content, dataAttribute) {
    content.sort()
}

TABS.forEach((tab) => {
    tab.addEventListener('click', () => {
        TABS.forEach((tab) => {
            tab.classList.remove('selected')
        });
        tab.classList.add('selected');
        const DATA_ATTRIBUTE = tab.getAttribute('data-products');
        CONTENT.forEach((item) => {
            item.classList.add('d-none');
            if (item.getAttribute('data-products') == DATA_ATTRIBUTE) {
                item.classList.remove('d-none');
            }
        });
        renderProducts(ELECTRONICS, 'electronics_content')
        renderProducts(FRUITS, 'fruits_content')
    })
})

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(allProducts, 'all_content');
})

const ABS = document.querySelector('#sort_abs');
const DESC = document.querySelector('#sort_desc');

DESC.addEventListener('click', () => {
    const SELECTED_TAB = document.querySelector('.tabs__item.selected');
    const DATA_ATTRIBUTE = SELECTED_TAB.getAttribute("data-id");
    if (DATA_ATTRIBUTE == 'all_content') {
        allProducts.sort((a, b) => {
            return b.price - a.price;
        })
        renderProducts(allProducts, 'all_content')
    }
    if (DATA_ATTRIBUTE == 'fruits_content') {
        FRUITS.sort((a, b) => {
            return b.price - a.price;
        })
        renderProducts(FRUITS, 'fruits_content')
    }
    if (DATA_ATTRIBUTE == 'electronics_content') {
        ELECTRONICS.sort((a, b) => {
            return b.price - a.price;
        })
        renderProducts(ELECTRONICS, 'electronics_content')
    }
})

ABS.addEventListener('click', () => {
    const SELECTED_TAB = document.querySelector('.tabs__item.selected');
    const DATA_ATTRIBUTE = SELECTED_TAB.getAttribute("data-id");
    if (DATA_ATTRIBUTE == 'all_content') {
        allProducts.sort((a, b) => {
            return a.price - b.price;
        })
        renderProducts(allProducts, 'all_content')
    }
    if (DATA_ATTRIBUTE == 'fruits_content') {
        FRUITS.sort((a, b) => {
            return a.price - b.price;
        })
        renderProducts(FRUITS, 'fruits_content')
    }
    if (DATA_ATTRIBUTE == 'electronics_content') {
        ELECTRONICS.sort((a, b) => {
            return a.price - b.price;
        })
        renderProducts(ELECTRONICS, 'electronics_content')
    }
})