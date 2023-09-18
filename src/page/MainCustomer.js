const SNS = [
    { id: 1, link: "", src: "/images/sns01.jpg", alt: "키친아트 요거트메이커" },
    { id: 2, link: "", src: "/images/sns02.jpg", alt: "키친아트, 수면을 방해하는 식습관에 대해 알아보자" },
    { id: 3, link: "", src: "/images/sns03.jpg", alt: "키친아트 프리미엄 니트럴 장갑을 NS 쇼핑몰에서 PICK하세요." },
]

const HELP = [
    { id: 1, link: "", strong: "어떤 도움이 필요하신가요?", span: " / 고객센터 바로가기", icon: "arrow_forward" },
    { id: 2, link: "", strong: "무슨 상품을 보고싶으신가요?", span: " / 쇼핑몰 바로가기", icon: "arrow_forward" },
]

const MainCustomer = () => {
    return (
        <section className="main_customer sec">
            <div className="title">
                <h3>고객의 소리를 귀담아듣는 키친아트</h3>
                <p>키친아트의 SNS 소식을 전해드립니다.</p>
            </div>
            <div className="inner content">
                <ul className="sns_feed">
                    <li className="insta">
                        <span><strong>키친아트</strong>의 인스타그램을 팔로우하고 최신 소식을 받아보세요.</span>
                        <a href="" className="more">팔로우 하기</a>
                    </li>
                    {
                        SNS.map(it => {
                            return (
                                <li key={it.id}>
                                    <a href={it.link} className="sns">
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + it.src} alt={it.alt} />
                                        </figure>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="need_help">
                    {
                        HELP.map(it => {
                            return (
                                <li key={it.id}>
                                    <strong>{it.strong} <span>{it.span}</span></strong>
                                    <a href={it.link}>
                                        <span className="material-symbols-outlined">
                                            {it.icon}
                                        </span>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainCustomer;