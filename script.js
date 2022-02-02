class PaginationPage {
  static apiBase = 'http://testtask.alto.codes/front-products.php';

  page = 0;
  perPage = 4;

  constructor() {
    this.fetchAndRender();
  }

  fetchAndRender() {
    fetch(`${PaginationPage.apiBase}?skip=${this.skip}`)
      .then(data => data.json())
      .then(response => {
        const prod = document.getElementById('product');

        prod.innerHTML = response.products.map(el => {
          return `
        <div class="container"></div>  
        <div class="product-border-all">
          <div class="product">
            <img src="${el.image_url}" class="image_size" id="image_url" alt="${el.name}">
            <div id="btn">
              <button class="btn-top">В наличии</button>
            </div>
            <div id="name">${el.name}</div>
            <div id="price">${el.price}<span> ₽</span></div>
            <div class="product-all">
              <div id="color">${el.color}</div>
              <div id="short_desc">${el.short_desc}</div>
              <div id="buy">
                <button class="btn-down btn-image">В корзину</button>
              </div> 
            </div> 
          </div>
        </div>  
        `;
        }).join('');

        return Promise
      });
  }

  nextPage() {
    this.page++;
    this.fetchAndRender();
  }

  previousPage() {
    this.page--;
    this.fetchAndRender();
  }

  setPage(page) {
    this.page = page;
    this.fetchAndRender();
  }

  get skip() {
    if (this.page === 0) return 0;
    return this.page * this.perPage;
  }
}

const paginator = new PaginationPage();
