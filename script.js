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
        <div class="container">
        <div class="product">
          <img src="${el.image_url}" id="image_url" alt="${el.name}">
          <div id="btn">
            <button>В наличии</button>
          </div>
          <div id="name">${el.name}</div>
          <div id="price">${el.price}</div>
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
