let slide_index = 0
let slide_play = true
let slides = document.querySelectorAll('.slide')

hideAllSlide = () => {
    slides.forEach(e => {
        e.classList.remove('active')
    })
}

showSlide = () => {
    hideAllSlide()
    slides[slide_index].classList.add('active')
}

nextSlide = () => slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1

prevSlide = () => slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1

// pausar slide quando mouseover

document.querySelector('.slider').addEventListener('mouseover', () => slide_play = false)

// ativar o slide quando mouseleave

document.querySelector('.slider').addEventListener('mouseleave', () => slide_play = true)

// controle slider 

document.querySelector('.slide-next').addEventListener('click', () => {
    nextSlide()
    showSlide()
})

document.querySelector('.slide-prev').addEventListener('click', () => {
    prevSlide()
    showSlide()
})

showSlide()

// setInterval(() => {
//     if (!slide_play) return
//     nextSlide()
//     showSlide()
// }, 3000);

// render products

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
        old_price: 'R$R$400',
        curr_price: 'R$R$300'
    },
    {
        name: 'MALA NIKE BRASILIA',
        image1: './images/Mala_Nike_Brasilia.png',
        image2: './images/2IC-5665-026_zoom2.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
    {
        name: 'SQUEEZE NIKE HIDRO FLOW',
        image1: './images/Squeeze_Nike_Hidro_Flow.png',
        image2: './images/5MS-0075-006_zoom2.png',
        old_price: 'R$400',
        curr_price: 'R$300'
    },
]

let product_list = document.querySelector('#latest-products')
let best_product_list = document.querySelector('#best-products')

products.forEach(e => {
    let prod = `
        <div class="col-3 col-md-6 col-sm-12">
            <div class="product-card">
                <div class="product-card-img">
                    <img src="${e.image1}" alt="">
                    <img src="${e.image2}" alt="">
                </div>
                <div class="product-card-info">
                    <div class="product-btn">
                        <button class="btn-flat btn-hover btn-shop-now">comprar agora</button>
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
    best_product_list.insertAdjacentHTML("afterbegin", prod)
})
