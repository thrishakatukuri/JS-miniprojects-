// let h1 = document.createElement('h1')
// h1.innerHTML = 'Products';
// h1.style.display='flex';
// h1.style.flexDirection='column';
// h1.style.width='100%';
// document.body.appendChild(h1);

// let section = document.createElement('section');
// section.id = 'products-container';
// section.innerHTML = `<h1>Products</div>`
// document.body.appendChild(section);

let productsData = fetch('https://www.dummyjson.com/products')

async function data() {
    let productsApi = await productsData;

    let {products} = await productsApi.json();

    products.splice(8, 1); // Remove 9th item
    products.splice(5, 1); // Remove 6th item
    products.splice(16, 1); // Remove 16th item
    // <h1>Products</h1>

    console.log(products);
    products.map((item) =>{
        document.body.innerHTML += `<div id=products>
        <h1><span>${item.title}</span></h1> 
        <img src=${item.thumbnail} >
        <h2>Price: £  ${item.price}/-</h2>
        <div id="review">
        <h3>In-Stock: (${item.stock})</h3>
        <h3>Ratings: (${item.rating})</h3>
        </div>
        <h4>Top-Reviews : ${item.reviews[0].comment} ...</h4>
        <p>${item.description}..</p>
       </div> `

    })
}data()
