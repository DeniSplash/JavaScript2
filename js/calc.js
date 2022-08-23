class GoodsItem {
    constructor(title, price, image) {
    this.title = title;
    this.price = price;
    this.image = image;
    }
    render() {
    return `<div class="col"">
                        <div class="card shadow-sm">
                            <img alt="яхта на море" src=${this.image} width="100%" height="100%" fill="#55595c">
                            <div class="card-body">
                                <p class="card-text">${this.title}</p>
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
    constructor() {
    this.goods = [];
    }
    fetchGoods() {
        this.goods = [
            { imgage: 'img/board.jpg', title: 'Клавиатура', price: 150 },
            { imgage: 'img/mouse.jpg', title: 'Мышка', price: 50 },
            { imgage: 'img/mon.jpg', title: 'Монитор', price: 350 },
            { imgage: 'img/sound.jpg', title: 'Колонки', price: 250 },
        ];
    }
    render() {
        let listHtml = '';
            this.goods.forEach(good => {
                const goodItem = new GoodsItem(good.title, good.price, good.imgage);
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
list.fetchGoods();
list.render();
alert(`Сумма всех товаров - ${list.summAllGoods()} $`);

////////////////////////////////////////////////////////////////////////////////////////////////
class BasketItem {
    constructor(title, price, image, count) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.count = count;
    }
    
}

class Basket {
    constructor() {
    this.items = [];
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

////////////////////////////////////////////////////////////////////////////////////////////////
class Hamburger {
    constructor(size) { 
        this.size = size;
        this.stuffing = [];
        this.toping = [];
    }

    addStuffing(stuffing) {
        this.stuffing.push(stuffing);
    }

    addTopping(topping) { 
        this.toping.push(topping);
    }

     getToppings() { 

        let totalSum = "";

        if(this.toping.length > 0) {

            for (let index = 0; index < this.toping.length; index++) {
                let item = this.toping[index];
                totalSum += " " + item[0];
            }
        }

        return totalSum;
      }

     getSize() { 

        return this.size[0];
    }

     getStuffing() { 

        let totalSum = "";

        if(this.stuffing.length > 0) {

            for (let index = 0; index < this.stuffing.length; index++) {
                let item = this.stuffing[index];
                totalSum += " " + item[0];
            }
        }

        return totalSum;

      }

     calculatePrice() { 

        let totalSum = 0;

        totalSum = this.size[1];

        if(this.stuffing.length > 0) {

            for (let index = 0; index < this.stuffing.length; index++) {
                let item = this.stuffing[index];
                totalSum += item[1];
            }
        }

        if(this.toping.length > 0) {

            for (let index = 0; index < this.toping.length; index++) {
                let item = this.toping[index];
                totalSum += item[1];
            }
        }

        return totalSum;

     }

     calculateCalories() { 
        
        let totalSum = 0;

        totalSum = this.size[2];

        if(this.stuffing.length > 0) {

            for (let index = 0; index < this.stuffing.length; index++) {
                let item = this.stuffing[index];
                totalSum += item[2];
            }
        }

        if(this.toping.length > 0) {

            for (let index = 0; index < this.toping.length; index++) {
                let item = this.toping[index];
                totalSum += item[2];
            }
        }

        return totalSum;

     }
     
    }

    const burgerSize = ["Маленький", 50, 20, "Большой", 100, 40];
    const burgerStuffing = ["С сыром", 10, 20, "С салатом", 20, 5, "С картофелем", 15, 10];
    const burgerToping = ["Приправа", 15, 0, "Майонез", 20, 5];
    
    const burger1 = new Hamburger(burgerSize.slice(0, 3));
    burger1.addStuffing(burgerStuffing.slice(burgerStuffing.indexOf("С сыром"), 3));
    burger1.addTopping(burgerToping.slice(burgerToping.indexOf("Приправа"), 3));

    console.log(burger1.size);
    console.log(burger1.stuffing);
    console.log(burger1.toping);
    console.log(burger1.getStuffing());

    console.log("Цена - " + burger1.calculatePrice());
    console.log("Каллории - " + burger1.calculateCalories());