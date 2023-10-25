const slides = [
    {
        id: 1,
        image: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_super-retina-xdr-display_10132020_Full-Bleed-Image.jpg.xlarge.jpg',
        link: 'https://www.apple.com/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/'
    }, 
    {
        id: 2,
        image: 'https://www.apple.com/newsroom/images/product/iphone/standard/Apple-iPhone13-Pro-color-lineup-220308_big_carousel.jpg.large.jpg',
        link: 'https://www.usatoday.com/story/tech/2023/09/12/apple-event-2023-live-updates/70817150007/'
    }, 
    {
        id: 3,
        image: 'https://www.apple.com/newsroom/images/product/iphone/standard/apple_iphone-12_new-design_10132020_big.jpg.large.jpg',
        link: 'https://www.apple.com/newsroom/2020/10/apple-announces-iphone-12-and-iphone-12-mini-a-new-era-for-iphone-with-5g/'
    }, 
    {
        id: 4,
        image: 'https://petapixel.com/assets/uploads/2022/10/iPhone-14-Pro-Review-800x420.jpg',
        link: 'https://petapixel.com/2022/10/06/apple-iphone-14-pro-review-the-only-camera-you-really-need/'
    }, 
    {
        id: 5,
        image: 'https://petapixel.com/assets/uploads/2022/10/iphone-14-pro-review-4-800x534.jpg',
        link: 'https://petapixel.com/2022/10/06/apple-iphone-14-pro-review-the-only-camera-you-really-need/'
    }
]

function composeSlide(slide) {
    return `
        <a href="${slide.link}" target="_blank">
            <div class="carousel-item ${(slide.id == 1) ? 'active' : ''}">
                <img src="${slide.image}" class="d-block w-100" alt="Slide ${slide.id}">
            </div>
        </a>
    `
}

function composeSlides(slides) {
    let html = ''
    for(let slide of slides) {
        html += composeSlide(slide)
    }
    return html
}

export function initSlider(div) {
    div.innerHTML = `
    <div id="slider" class="carousel carousel-dark slide">
        <div class="carousel-inner" height='100px'>
            ${composeSlides(slides)}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
    `
}
