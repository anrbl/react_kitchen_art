const Footer = () => {
    const html = document.querySelector('html');
    return (
        <footer className="footer">
            <div className="inner">
                <ul className="foot_customer">
                    <li><a href="">회사소개</a></li>
                    <li><a href="">이용안내</a></li>
                    <li><a href="" className="strong">개인정보취급방침</a></li>
                    <li><a href="">이용약관</a></li>
                    <li><a href="">광고/제휴 문의</a></li>
                    <li><a href="">키친아트 쇼핑몰</a></li>
                </ul>
                <address>
                    <ul className="foot_addr">
                        <li>인천시 서구 장고개로 118번길 5</li>
                        <li>대표 전화 : 032-577-0077</li>
                        <li>FAX : 032-577-0081</li>
                        <li>mail : kitchenart@kitchenart.co.kr</li>
                    </ul>
                    <div className="copy">
                        Copyright © 2023 KITCHENART CORP. All rights reserved.
                    </div>
                </address>
            </div>

            <div className="top" onClick={() => { html.animate({ scrollTop: 0 }, 600) }}>
                <span>TOP</span>
            </div>
        </footer>
    )
}

export default Footer;