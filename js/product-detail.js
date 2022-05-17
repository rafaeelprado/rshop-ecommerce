document.querySelectorAll('.product-img-item').forEach(e => {
    e.addEventListener('click', () => {
        let img = e.querySelector('img').getAttribute('src')
        document.querySelector('#product-img > img').setAttribute('src', img)
    })
})

document.querySelector('#view-all-description').addEventListener('click', () => {
    let content = document.querySelector('.product-detail-description-content')
    content.classList.toggle('active')
    document.querySelector('#view-all-description').innerHTML = content.classList.contains('active') ? 'ver menos' : 'ver tudo'
})

let products = [
    {
        name: 'MOCHILA NIKE GTK',
        image1: './images/Mochila_Nike_GTK.png',
        image2: './images/2IC-3604-026_zoom3.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
    {
        name: 'CHINELO SLIDE NIKE VICTORI',
        image1: './images/Chinelo_Slide_Nike_Victori_.png',
        image2: './images/HZM-5127-532_zoom2.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
    {
        name: 'MOCHILA NIKE GTK',
        image1: './images/Mochila_Nike_Classic.png',
        image2: './images/2IC-3604-862_zoom3.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
    {
        name: 'CHUTEIRA NIKE PHANTOM',
        image1: './images/Chuteira_Nike_Phantom.png',
        image2: './images/004-5830-042_zoom2.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
    {
        name: 'MEIA STRIKE NIKE CANO ALTO',
        image1: './images/Meia_Cano_Alto_Nike_Strike.png',
        image2: './images/2IC-7546-026_zoom2.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
    {
        name: 'MALA NIKE BRASILIA',
        image1: './images/Mala_Nike_Brasilia.png',
        image2: './images/2IC-5665-026_zoom2.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
]

let product_list = document.querySelector('#related-products')

renderProducts = (products) => {
    products.forEach(e => {
        let prod = `
            <div class="col-4 col-md-6 col-sm-12">
                <div class="product-card">
                    <div class="product-card-img">
                        <img src="${e.image1}" alt="">
                        <img src="${e.image2}" alt="">
                    </div>
                    <div class="product-card-info">
                        <div class="product-btn">
                            <a href="./product-detail.html" class="btn-flat btn-hover btn-shop-now">comprar agora</a>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-cart-add'></i>
                            </button>
                            <button class="btn-flat btn-hover btn-cart-add">
                                <i class='bx bxs-heart'></i>
                            </button>
                        </div>
                        <div class="product-card-name">
                            ${e.name}
                        </div>
                        <div class="product-card-price">
                            <span><del>${e.old_price}</del></span>
                            <span class="curr-price">${e.curr_price}</span>
                        </div>
                    </div>
                </div>
            </div>
        `
        product_list.insertAdjacentHTML("beforeend", prod)
    })
}

renderProducts(products)