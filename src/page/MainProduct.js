const PRODUCT = [
    { id: 1, desc: "후라이팬", link: "", src: "/images/itm01.jpg", alt: "후라이팬" },
    { id: 2, desc: "냄비", link: "", src: "/images/itm04.jpg", alt: "냄비" },
    { id: 3, desc: "그릴류", link: "", src: "/images/itm02.jpg", alt: "그릴류" },
    { id: 4, desc: "압력솥", link: "", src: "/images/itm03.jpg", alt: "압력솥" }
]

const MainProduct = () => {
    return (
        <section className="main_product sec">
            <div className="inner content">
                <div className="title">
                    <h3>새로운 것들을 개척하는 키친아트</h3>
                    <p>키친아트는 주방 문화의 새로운 장을 열고 제품의 질을 보장합니다.</p>
                </div>
                <ul className="prod">
                    {
                        PRODUCT.map(it => {
                            return (
                                <li key={it.id}>
                                    <a href={it.link}>
                                        <div className="img_box">
                                            <img src={process.env.PUBLIC_URL + it.src} alt={it.alt} />
                                        </div>
                                        <div className="desc">
                                            <strong>{it.desc}</strong>
                                            <span>kitchenart</span>
                                        </div>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="more">
                    <a href="">
                        더 많은 제품 보러가기</a>
                </div>
            </div>
        </section>
    )
}

export default MainProduct;