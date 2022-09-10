Vue.component('goods-list', {
    props: ['goods'],
    template: `
    <div class="goods-list row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <goods-item v-for="good in goods" :good="good"></goods-item>
    </div>
    `
});

Vue.component('goods-item', {
    props: ['good'],
    template: `
                        <div class="col goods-item"">
                            <div class="card shadow-sm">
                                <img :src="$root.imgCatalog" alt="Some img">
                                <div class="card-body">
                                    <p class="card-text">{{good.product_name}}</p>
                                    <div class="d-flex justify-content-between align-items-center">
                                        <div class="btn-group">
                                            <button type="button" class="btn btn-sm btn-outline-secondary buy-btn"
                                                @click="$root.addProduct(good)">Купить</button>
                                        </div>
                                        <small class="text-muted">{{good.price}} $</small>
                                </div>
                            </div>
                        </div>
                        `

});