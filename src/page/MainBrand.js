import { useState } from "react"
// import $ from "jquery";

const BrandS = [{
    id: 1,
    title: "BRAND STORY",
    text: "고객 사랑에 보답하는 키친아트",
    desc: "“키친아트”는 고객의 관심과 사랑으로 성장해 왔기에 고객의 관심과 성원에 보답하고자 다시 한번 도약하여 새로운 회사로 거듭나고자 합니다. “고객중심 경영”을 경영방침으로 정하고, 회사의 이익보다 고객의 만족이 우선하며, 고객의 건강과 안전이 우선이며, 고객의 신뢰가 우선인 기업, 더 나아가 아름다운 주방, 주방의 개념을 예술로 승화시키기 위해 노력을 하는 회사가 되고자 합니다.",
    more: "OUR STORY",
    src: "/images/bg03.jpg",
    link: ""
},
{
    id: 2,
    title: "BRAND ideology",
    text: "61년간 이어진 키친아트",
    desc: "“고객중심 경영”을 경영방침으로 정하고, 회사의 이익보다 고객의 만족이 우선하며, 고객의 건강과 안전이 우선이며, 고객의 신뢰가 우선인 기업, 더 나아가 아름다운 주방, 주방의 개념을 예술로 승화시키기 위해많은 노력을 하는 회사가 되고자 합니다.",
    more: "OUR HISTORY",
    src: "/images/bg01.jpg",
    link: ""
}];

const B_NUM = [
    { id: 1, span: "고객 만족", strong: "+300k" },
    { id: 2, span: "보유 상품", strong: "6,600" },
    { id: 3, span: "누적 시간", strong: "21,900" }
]
const MainBrand = () => {
    const [tab, setTab] = useState(0);
    // useEffect(() => {
    //     $(".brand_set li").on('click', function (e) {
    //         e.preventDefault();
    //         let idx = $(this).index();
    //         $('brand_set li').eq(idx).addClass('on').siblings().removeClass('on');
    //     })
    // }, []);

    return (
        <section className="main_brand sec">
            <div className="inner content">
                <ul className="brand_set">
                    {
                        BrandS.map((it, idx) => {
                            return (
                                <li className={tab == idx && 'on'} onClick={() => setTab(idx)} key={it.id}>
                                    <span>{it.title}</span>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul className="brand_story">
                    {
                        BrandS.map((it, idx) => {
                            return (
                                <li className={tab == idx && 'on'} key={it.id}>
                                    <div className="b_left">
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + it.src} alt={it.text} />
                                        </figure>
                                    </div>
                                    <div className="b_right">
                                        <div className="title">
                                            <h3>{it.text}</h3>
                                        </div>
                                        <div className="txt">
                                            <p>{it.desc}</p>
                                            <a href={it.link} className="more">{it.more}</a>
                                        </div>

                                        {
                                            idx == 0 && (
                                                <ul className="num">
                                                    {
                                                        B_NUM.map((it, idx) => {
                                                            return (
                                                                <li key={it.id}>
                                                                    <span>{it.span}</span>
                                                                    <strong>{it.strong}</strong>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </div>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>
        </section>
    )
}

export default MainBrand;