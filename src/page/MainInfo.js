const Info = [
    { id: 1, InfoTit: "역사", InfoDesc: "키친아트는 61년 오랜세월 동안 고객니즈에 귀기울여 왔습니다. 단순히 오래된 키친아트가 아닌 앞으로의 키친아트를 위해 나날이 정진하며 개발하고 있습니다.", src: "/images/maincontent01.jpg", alt: "키친아트의 역사" },
    { id: 2, InfoTit: "합리적인 가격", InfoDesc: "소비자가 어떠한 제품을 필요로 할 때, 키친아트는 이 제품을 어떠한 가격에 제공해야 하는가를 고민하고, 이로인해 고객의 만족을 실현하기 위해 최선을 다합니다.", src: "/images/maincontent02.jpg", alt: "키친아트의 합리적인 가격" },
    { id: 3, InfoTit: "소통", InfoDesc: "키친아트는 고객의 소리에 항상 집중하고 있습니다. 다양한 조사와 자료들을 통하여 고객의 니즈, 커뮤니티의 반응, 제품에 대한 피드백을 수용합니다.", src: "/images/maincontent03.jpg", alt: "키친아트의 소통" },
    { id: 4, InfoTit: "신뢰", InfoDesc: "키친아트를 믿고 제품을 구입하시는 고객들을 위하여 다양한 보증 서비스를 제공하고 있으며, 문제가 생겼을 시 고객 한명 한명이 만족하실 수 있도록 노력합니다.", src: "/images/maincontent04.jpg", alt: "키친아트의 신뢰" },
]

const MainInfo = () => {
    return (
        <section className="main_information sec">
            <div className="inner content">
                <div className="title">
                    <h3>주방속의 예술감각,</h3>
                    <p>61년 역사로 이루어진 경험.</p>
                </div>
                <div className="info_con">
                    {
                        Info.map(it => {
                            return (
                                <div className="itm" key={it.id}>
                                    <figure>
                                        <img src={process.env.PUBLIC_URL + it.src} alt={it.alt} />
                                    </figure>
                                    <div className="desc">
                                        <strong>{it.InfoTit}</strong>
                                        <p>{it.InfoDesc}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default MainInfo;