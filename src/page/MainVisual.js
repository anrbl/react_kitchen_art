
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useRef, useState } from "react";
import Slider from "react-slick";

const MainVisual = () => {
    const [IDX] = useState();
    const SLIDE = [
        { id: 1, text: "주방 속의 예술감각 키친아트" },
        { id: 2, text: "주방 속의 예술감각 키친아트" },
        { id: 3, text: "주방 속의 예술감각 키친아트" },
    ]
    const setting = {
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,
    };
    const MainSlide = useRef(null);

    return (
        <section className="main_visual effect">
            <h2 className="blind">키친아트를 소개합니다.</h2>
            <Slider {...setting} ref={MainSlide} className="main_slide">
                {
                    SLIDE.map((slide, idx) => {
                        return (
                            <div className={'itm itm0' + slide.id + (idx === IDX ? 'slick-current' : '')} key={slide.id}>
                                <span className="blind">{slide.text}</span>
                            </div>
                        )
                    })
                }
            </Slider>
            <div className="slogan">
                <h3>키친아트</h3>
                <p>Life Time Guarantee is the BEST</p>
            </div>
            <div className="arrows">
                <button className="left" onClick={() => MainSlide.current.slickPrev()} >
                    <span className="material-symbols-outlined">
                        chevron_right
                    </span>
                </button>
                <button className="right" onClick={() => MainSlide.current.slickNext()}>
                    <span className="material-symbols-outlined">
                        chevron_left
                    </span>
                </button>
            </div>
        </section >
    )
}

export default MainVisual;