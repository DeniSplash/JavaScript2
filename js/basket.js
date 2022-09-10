Vue.component('basket-list', {
    props: ['goods'],
    template: `
    <div class="modal modal-sheet d-block py-5" v-if="$parent.show" tabindex="-1" role="dialog" id="modalSheet">
    <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
            <div class="modal-header border-bottom-0">
                <h5 class="modal-title">Корзина</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                    @click="$parent.showBasket"></button>
            </div>
            <div class="basket-list modal-body py-0">
                <p v-if="!$parent.countProduct">Корзина пуста</p>
                <basket-item v-for="good in goods" :good="good"></basket-item>
            </div>
            <div class="modal-footer flex-column border-top-0">
                <button type="button" class="btn btn-lg btn-primary w-100 mx-0 mb-2">Купить</button>
                <button type="button" class="btn btn-lg btn-light w-100 mx-0"
                    data-bs-dismiss="modal" @click="$parent.showBasket">Отмена</button>
            </div>
        </div>
    </div>
</div>
    `
});

Vue.component('basket-item', {
    props: ['good'],
    template: `
                <div>
                    <p>Название товара: {{ good.product_name }}</p>
                    <p>Стоимость товара: {{ good.price }}</p>
                    <p>Стоимость товара: {{ good.quantity }}</p>
                    <img width="200" :src="good.img" :alt="good.title"><br>
                    <hr>
                    </div>
                `

});