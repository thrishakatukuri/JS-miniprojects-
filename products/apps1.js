
let allProducts = [];

async function productsData() {
    let productsApi = await fetch('https://www.dummyjson.com/products?limit=100');
    let { products } = await productsApi.json();
    allProducts = [...products];

    renderProducts(allProducts);

    // Event listeners for filtering
    document.getElementById('priceRange').addEventListener('input', filterData);
    document.getElementById('four').addEventListener('change', filterData);
    document.getElementById('three').addEventListener('change', filterData);
}

function filterData() {
    let priceRange = document.getElementById('priceRange').value;
    document.getElementById('price').innerHTML = `£ ${priceRange}`;

    let four = document.getElementById('four').checked;
    let three = document.getElementById('three').checked;

    let filteredProducts = allProducts.filter(item => item.price <= priceRange);

    if (four) {
        filteredProducts = filteredProducts.filter(item => item.rating >= 4);
    } else if (three) {
        filteredProducts = filteredProducts.filter(item => item.rating >= 3);
    }

    renderProducts(filteredProducts);
}

function renderProducts(products) {
    let section = document.querySelector('section');
    section.innerHTML = "";

    products.forEach((item) => {
        section.innerHTML += `
        <div class="product">
            <h2>${item.title}</h2>
            <img src="${item.thumbnail}" alt="${item.title}" />
            <h3>Price: £${item.price}</h3>
            <p>${item.description}</p>
            <div class="details">
                <span>⭐ ${item.rating}</span>
                <span>In stock: ${item.stock}</span>
            </div>
        </div>
        `;
    });
}

productsData();
