Vue.component('filter-products', {

    template: `
    <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
        <div>
            <input type="text" class="goods-search" v-model="$parent.userSearch" />
            <button class="search-button" type="button" @click="$parent.filter">Искать</button>
        </div>                
    </form>
    `
});
