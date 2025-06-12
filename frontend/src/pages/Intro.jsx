import React from "react";

const pfData = [
    {
        key: "hair",
        label: "Hair",
        fontClass: 2,
        imgSize: 6,
        image: "main_photo1.png",
        alt: "헤어_이미지"
    },
    {
        key: "makeup",
        label: "MakeUp",
        fontClass: 2,
        imgSize: 6,
        image: "main_photo1.png",
        alt: "메이크업_이미지"
    },
    {
        key: "wedding",
        label: "Wedding",
        fontClass: 4,
        imgSize: 4,
        image: "main_photo1.png",
        alt: "웨딩_이미지"
    },
    {
        key: "star",
        label: "Star",
        fontClass: 4,
        imgSize: 4,
        image: "main_photo1.png",
        alt: "연예인_이미지"
    },
    {
        key: "nailArt",
        label: "NailArt",
        fontClass: 4,
        imgSize: 4,
        image: "main_photo1.png",
        alt: "네일_이미지"
    }
];

const Intro = () => {
    return (
        <div id="page-top">
            <header className="masthead sub d-flex align-items-center"></header>
            <div className="sub_menu w33p">
                <div className="inner">
                    <ul>
                        <li className="cur"><strong><a href="#">인사말</a></strong></li>
                        <li><strong><a href="#" onClick="">샵</a></strong></li>
                        <li><strong><a href="#" onClick="">오시는길</a></strong></li>
                    </ul>
                </div>
            </div>

            {/*shop*/}
            <section className="page-section clearfix">
                <div className="container">
                    <div className="intro">
                        <img className="intro-img img-fluid mb-3 mb-lg-0 rounded" src="/resources/img/main/main_background2.jpg" alt=""/>
                        <div className="intro-text left-0 text-center bg-gray p-5 rounded">
                            <h2 className="section-heading mb-4">
                                <span className="section-heading-upper">미장원</span>
                                <span className="section-heading-lower">by 태현</span>
                            </h2>
                            <p className="mb-5">안녕하세요. 김태현 입니다.
                                국내 최고의 디자이너 팀과 함께 보다 업그레이드된 기술과 최상의 서비스로 고객님을 모시겠습니다.
                                언제나 초심을 잃지않고 최선을 다하겠습니다.</p>
                            <div className="intro-button mx-auto"><a className="btn btn-light btn-xl" href="#">예약하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content-section" id="portfolio">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-0">
                        {pfData.map((item) => (
                            <div key={item.key} className={`col-lg-${item.imgSize}`}>
                                <a className="portfolio-item" href="#">
                                    <div className="caption">
                                        <div className="caption-content">
                                            <div className="container px-4 px-lg-5 text-center">
                                                <h1 className={`mb-1 fs-${item.fontClass} text-nowrap roboto`}>{item.label}</h1>
                                            </div>
                                        </div>
                                    </div>
                                <img className="img-fluid" src={`/resources/img/main/${item.image}`} alt={item.alt}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Intro;