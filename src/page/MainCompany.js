const COMPANY = [
    { id: 1, num: "01", text: "소유의 공동" },
    { id: 2, num: "02", text: "고객중심 경영" },
    { id: 3, num: "03", text: "품질 경영" },
    { id: 4, num: "04", text: "분배의 공정" },
    { id: 5, num: "05", text: "책임 경영" },
    { id: 6, num: "06", text: "이익 경영" },
]
const TASK = [
    { id: 1, comTXT: "미래경영", comDESC: "시대적 변화에 선제적 대응과 지속 가능한 성장동력 확보" },
    { id: 2, comTXT: "창의경영", comDESC: "변화와 혁신,  className지속적인 자기개발을 통한 새로운 가치 창조" },
    { id: 3, comTXT: "소통경영", comDESC: "가치와 목표를 공유하고, 대화를 통한 소통하는 기업문화 정착" }
]

const MainCompany = () => {
    return (
        <section className="main_company sec">
            <h2 className="blind">키친아트 주식회사에 대한 소개</h2>
            <div className="inner content">
                <div className="tit">
                    <strong>it's</strong>
                    <p>kitchen art</p>
                </div>
                <div className="company">
                    <div className="com_left">
                        <ul>
                            <li className="on">키친아트의 약속</li>
                            {
                                COMPANY.map((it, idx) => {
                                    return (
                                        <li key={it.id}>
                                            <span>{it.num}</span>
                                            {it.text}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="com_right">
                        <figure>
                            <img src={process.env.PUBLIC_URL + "images/main.jpg"} alt="키친아트 회사의 전경" />
                        </figure>
                    </div>
                </div>
                <ul className="company_txt">
                    <li className="txt_tit">
                        <h3>
                            <strong>2022,</strong>
                            키친아트의 수행과제
                        </h3>
                    </li>
                    {
                        TASK.map((it, idx) => {
                            return (
                                <li key={it.id}>
                                    <strong>{it.comTXT}</strong>
                                    <p>{it.comDESC}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainCompany;