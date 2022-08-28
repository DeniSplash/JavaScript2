const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class GoodsItem {
    constructor(product_name, price, image) {
    this.product_name = product_name;
    this.price = price;
    this.image = image;
    }

    render() {
    return `<div class="col"">
                        <div class="card shadow-sm">
                            <img alt="товар" src=${this.image} width="100%" height="100%" fill="#55595c">
                            <div class="card-body">
                                <p class="card-text">${this.product_name}</p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                                    </div>
                                    <small class="text-muted">${this.price} $</small>
                                </div>
                            </div>
                        </div>
                </div>`;
    }
}
class GoodsList {
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this._getProducts()
            .then(data => { 
                this.goods = data;
                //console.log(data);
                this.render()
            });
    }

    _getProducts(){
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });     
    }

    render() {
        let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.product_name, good.price, 'img/mon.jpg');
                listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }

    summAllGoods() {
        let summ = 0;
        for (let index = 0; index < this.goods.length; index++) {
            summ += this.goods[index].price;
        }
        return summ;
    }
}

const list = new GoodsList();
//alert(`Сумма всех товаров - ${list.summAllGoods()} $`);

////////////////////////////////////////////////////////////////////////////////////////////////
class BasketItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    render() {
        return  `<div class="modal-body py-0">
                    <p class="card-text">Наименование: ${this.name}</p>
                    <p class="card-text">Цена: ${this.price}</p>
                    <p class="card-text">Количество: ${this.quantity}</p>
                    <hr>
                </div>`;
        }
    
}

class Basket {
    constructor(container = '.basket-list'){
        this.container = container;
        this.goods = [];
        this._clickBasket();
        this._getBasketItem()
            .then(data => { 
                this.goods = data.contents;
                console.log(data.contents);
                this.render()
            });
    }

    _getBasketItem(){
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            });     
    }

    _clickBasket() {
        document.querySelector('.btn-basket').addEventListener("click", 
        () => {document.querySelector('.modal').classList.toggle("invisible");});
    }

    render() {
        let listHtml = '';
            this.goods.forEach(good => {
                console.log(good);
                const basketItem = new BasketItem(good.product_name, good.price, good.quantity);
                listHtml += basketItem.render();
        });
        document.querySelector('.basket-list').innerHTML = listHtml;
    }

    addItem(item) {
        this.goods.push(item);
    }

    delItem(item) {
        this.goods.splice(this.goods.indexOf(item), 1);
    }

    editItem(item, count) {
        this.goods[this.goods.indexOf(item)].count = count;
    }

    clearBasket() {
        this.goods.splice(0, this.goods.length);
    }

    summTotal() {
        let sum = 0;
        this.items.forEach (item => { 
            sum += item.price*item.count;
        });
        return summ;
    }
}

 new Basket();
