let productsData = fetch('https://www.dummyjson.com/products')

// async function data() {
//     let productsApi = await productsData;
//     // console.log(productsApi);
//     let products = await productsApi.json();
//     console.log(products.products[0]);
// }data()
//simple of av=bove lines

async function data() {
    let productsApi = await productsData;
    console.log(productsApi);

    let {products} = await productsApi.json();
    console.log(products);
    products.map((item) =>{
        document.body.innerHTML += `<div id=products>
        <h1>${item.title}</h1> 
        <img src=${item.thumbnail} width:10px; height:10px;>
        <p>Price: ${item.price}</p>
        <p>Rting: ${item.rating}</p>
        <p>Reviews: ${item.reviews[0].rating}</p>
        <p>${item.description}</p>
        <p>stock: ${item.stock}</p>

       </div> `
    })
}data()
console.log(productsData);
