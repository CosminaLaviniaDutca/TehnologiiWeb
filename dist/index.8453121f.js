const container = document.getElementById("container");
function renderProduct(title, description, price, imageURL) {
    return `<div class="product">
              <img src="${imageURL}" />
              <span class="title">${title}</span>
              <span class="description">${description}</span>
              <span class="price">${price}</span>
           </div>
      `;
}
var product = document.createElement("div");
product.innerHTML = renderProduct("iPhone 9", "description", 399, "https://dummyjson.com/image/i/products/1/thumbnail.jpg");
// now let's add the product in the DOM hierarchy
container.appendChild(product);
fetch("https://dummyjson.com/products").then((res)=>res.json()).then((json)=>{
    for (const product of json.products){
        let productElement = document.createElement("div");
        productElement.innerHTML = renderProduct(product.title, product.description, product.price, product.thumbnail);
        container.appendChild(productElement);
    }
});

//# sourceMappingURL=index.8453121f.js.map
