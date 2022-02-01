fetch('http://testtask.alto.codes/front-products.php')
  .then(data => data.text())
  .then(response => {
    const result = JSON.parse(response);
    const prod = document.getElementById('product');

    const products = result.map(el => {
      return `
        <div class="product">
          <div id="name">${el.name}</div>
          <div id="image_url">${el.image_url}</div>
          <div id="price">${el.price}</div>
        </div>  
        `;
    }).join('');

    prod.innerHTML = products;

    return Promise
  })