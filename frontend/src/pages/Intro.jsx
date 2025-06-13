import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div id="page-top">
            <header className="masthead sub d-flex align-items-center"></header>
            <div className="sub_menu w33p">
                <div className="inner">
                    <ul>
                        <li className="cur"><strong><Link to="#">인사말</Link></strong></li>
                        <li><strong><Link to="/shop" onClick="">샵</Link></strong></li>
                        <li><strong><Link to="/location">오시는길</Link></strong></li>
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

        </div>
    )
}

export default Intro;