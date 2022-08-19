const goods = [
    { img: 'img/board.jpg', title: 'Клавиатура', price: 150 },
    { img: 'img/mouse.jpg', title: 'Мышка', price: 50 },
    { img: 'img/mon.jpg', title: 'Монитор', price: 350 },
    { img: 'img/sound.jpg', title: 'Колонки', price: 250 },
    ];

    const renderGoodsItem = (item) => {
    return  `<div class="col"">
                    <div class="card shadow-sm">
                        <img alt="яхта на море" src=${item.img} width="100%" height="100%" fill="#55595c">
                        <div class="card-body">
                            <p class="card-text">${item.title}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    
                                    <button type="button" class="btn btn-sm btn-outline-secondary">Добавить</button>
                                </div>
                                <small class="text-muted">${item.price} $</small>
                            </div>
                        </div>
                    </div>
            </div>`
    };

    const renderGoodsList = (list) => {
    let goodsList = list.map(item => renderGoodsItem(item));
    document.querySelector('.goods-list').innerHTML = goodsList.join('');
    }
    renderGoodsList(goods);