const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        filtered: [],
        cart: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        userSearch: '',
        show: false,
        countProduct: false,
        error: false
    },
    methods: {
        filter() {
            console.log(this.userSearch);
            const regexp = new RegExp(this.userSearch, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
        },
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(item) {
            console.log(item.id_product);

            let find = this.cart.find(product => item.product_name === product.product_name);
            if (find) {
                find.quantity++;
            } else {
                // let itemCart = Object.assign(item,{quantity:1});
                this.$set(item, 'quantity', 1);
                this.cart.push(item);

            }
        },
        showBasket() {
            this.checkBasket();
            this.show = !this.show;
        },
        checkBasket() {
            if (this.cart.length > 0) {
                this.countProduct = true;
            }

        }
    },
    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            })
            .catch(err => {
                console.log(err);
                this.error = true;
            });

        this.filtered = this.products;

    }
})