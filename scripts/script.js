let userData = [

]

function setElementOnDOM(selector, data) {
    let html = '';
    // 1. Find element on DOM
    const element = document.querySelector(selector);
    // 2. Forming HTML
    data.forEach((item) => {
        html += `
        <div class="store__item col-3 border m-2">
          <p>Name :${item.name}</p>
          <p>Email: ${item.email}</p>
          <button class="store__item_remove btn btn-warning" id="btn_${item.id} ">x</button>
        </div>`;
    });
    // 3. Set HTML on DOM
    element.innerHTML = html;
}

function setToLocalStorage(key, data) {
    // 1. Convert data to JSON
    const DATA = JSON.stringify(data);
    // 2. Set data to localStorage
    window.localStorage.setItem(key, DATA);
}

function getFromLocalStorage(key) {
    // 1. Get data from localStorage
    const DATA = window.localStorage.getItem(key);
    // 2. Convert data from JSON
    return JSON.parse(DATA);
}

function checkKeyInLocalStorage(key) {
    // 1. Get data from localStorage
    const DATA = window.localStorage.getItem(key);
    // 2. Check if data exists
    return DATA !== null;
}

function localStorageStarter(key, selector) {
    if (checkKeyInLocalStorage(key)) {
        // 1. Get data from localStorage
        text = getFromLocalStorage(key);
        // 2. Set data on DOM
        setElementOnDOM(selector, text);
        return true;
    } else {
        // 1. Set data to localStorage
        setToLocalStorage(key, []);
        return false;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    localStorageStarter('userData', '.user_cards') ? userData = getFromLocalStorage('userData') : userData = userData;
});

const ADD_ITEM_BTN = document.getElementById('add_item');

document.querySelector('#add_item').addEventListener('click', function (e) {
    e.preventDefault();
})

function removeFromLocalStorage(id) {
    const REMOVE_ITEM_BTN = document.getElementById(id);
    REMOVE_ITEM_BTN.addEventListener('click', () => {
    POST.slice(id, 1);
})
}

// const REMOVE_ITEM_BTN = document.getElementById();
// REMOVE_ITEM_BTN.addEventListener('click', () => {
//     POST.slice(btnId, 1);
// })


ADD_ITEM_BTN.addEventListener('click', () => {
    const NAME = document.getElementById('name');
    const EMAIL = document.getElementById('email');

    const POST = {
        id: userData.length + 1,
        name: NAME.value,
        email: EMAIL.value
    }
    userData.unshift(POST);
    setElementOnDOM('.user_cards', userData);
    setToLocalStorage('userData', userData);
});