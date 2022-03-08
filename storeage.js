//display products on UI base on local storage data
const diplayProductsBaseOnLocalStorage = () => {
    const products = getProducts();
    for (const keys in products) {
        diplayProducts(keys, products[keys]);
    }
}

//add event hadler on addToLocalStorage button
const addToLocalStorage = () => {
    const productInput = document.getElementById('storage-product');
    const product = productInput.value;
    const priceInput = document.getElementById('storage-price');
    const price = priceInput.value;

    //check whether input field is empty or not or other conditions 
    if (product && price && isNaN(product) && !isNaN(price)) {
        //display products on UI
        diplayProducts(product, price);
        //store products on local storage
        storeProducts(product, price);
        //clear input fields
        productInput.value = '';
        priceInput.value = '';
    }
}

//display products on UI
const diplayProducts = (product, price) => {
    const container = document.getElementById('container');
    const li = document.createElement('li');
    li.innerText = `${product}=${price}`;
    container.appendChild(li);
}

//check whether a local storage data consists or not in local storage
const getProducts = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if (cart) {
        cartObj = JSON.parse(cart);
    }
    else {
        cartObj = {};
    }
    return cartObj;
}

//store products name and value pairs on local storage
const storeProducts = (product, price) => {
    const cart = getProducts();
    if (cart[product]) {
        cart[product] = parseFloat(cart[product]) + parseFloat(price);
    }
    else {
        cart[product] = parseFloat(price);
    }
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

//add eventhadler on placeholder button 
const placeOrder = () => {
    document.getElementById('container').textContent = '';
    localStorage.removeItem('cart');
}

//call the displayProductsBaseOnLocalStorage function
diplayProductsBaseOnLocalStorage();
