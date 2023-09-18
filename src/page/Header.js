import { useEffect, useRef, useState } from "react"

const NAV = [
    { id: 1, menuList: "회사소개", link: '' },
    { id: 2, menuList: "뉴스", link: '' },
    { id: 3, menuList: "고객센터", link: '' },
    { id: 4, menuList: "쇼핑몰", link: '' }
]
const SUBNAV = [
    { id: 1, subTitle: 'CEO 인사말', subLink: '' },
    { id: 2, subTitle: '조직도', subLink: '' },
    { id: 3, subTitle: '연혁', subLink: '' },
]

const Header = () => {
    const [TT, setTT] = useState([false, false]);
    const HD = useRef();
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let sct = window.scrollY;
            sct > 0
                ? HD.current.classList.add('on')
                : HD.current.classList.remove('on')
        })
    })
    return (
        <header className="header" ref={HD}>
            <div className="head_wrap inner">
                <h1>
                    <a href="/kitchen-art">
                        <img src="images/logo.png" alt="" />
                    </a>
                </h1>
                <nav className="gnb">
                    <h2 className="blind">메뉴</h2>
                    <ul>
                        {
                            NAV.map((it, idx) => {
                                return (
                                    <li key={it.id}>
                                        <a href={it.link}>{it.menuList}</a>
                                        {
                                            idx == 0 && (
                                                <ul className="sub_menu">
                                                    {
                                                        SUBNAV.map((it, idx) => {
                                                            return (
                                                                <li key={it.id}>
                                                                    <a href={it.subLink}>{it.subTitle}</a>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            )
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
            <div className="mopen">
                <span className="material-symbols-outlined">
                    menu
                </span>
            </div>
        </header >
    )
}

export default Header;