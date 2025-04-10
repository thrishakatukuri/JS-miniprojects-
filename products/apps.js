
let productsData = fetch('https://www.dummyjson.com/products')

async function data() {

    let productsApi = await productsData;

    let {products} = await productsApi.json();

    products.splice(8, 1); // Remove 9th item
    products.splice(5, 1); // Remove 6th item
    products.splice(16, 1); // Remove 17th item

    console.log(products);
    let section = document.querySelector('section');
section.innerHTML = "";

    //  products.map((item) =>{
    //     section.innerHTML += ``

    //     document.body.innerHTML += `
         products.map((item) => {
        section.innerHTML += `
        <div id=products>
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
