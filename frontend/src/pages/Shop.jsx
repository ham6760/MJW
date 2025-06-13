import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Thumbs} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import {Link} from "react-router-dom";

import {React, useState } from "react";

const images = [
    "/resources/img/shop/shop_img_1.jpg",
    "/resources/img/shop/shop_img_2.jpg",
    "/resources/img/shop/shop_img_3.jpg",
    "/resources/img/shop/shop_img_4.jpg",
    "/resources/img/shop/shop_img_5.jpg",
    "/resources/img/shop/shop_img_6.jpg"
];

const Shop = () => {
    const [thumb, setThumb] = useState(null);
    return (
        <div id="page-top">
            <header className="masthead sub d-flex align-items-center"></header>
            <div className="sub_menu w33p">
                <div className="inner">
                    <ul>
                        <li><strong><Link to="/intro">인사말</Link></strong></li>
                        <li className="cur"><strong><Link to="#" onClick="">샵</Link></strong></li>
                        <li><strong><Link to="/location">오시는길</Link></strong></li>
                    </ul>
                </div>
            </div>
            <section className="page-section clearfix">
                <div className="container">
                    <Swiper modules={[Autoplay, Navigation, Thumbs]} autoplay={{ delay: 2000, disableOnInteraction: false }} navigation thumbs={{ swiper: thumb}} spaceBetween={10} slidesPerView={1}>
                        {images.map((img, idx) => (
                            <SwiperSlide key={idx}>
                                <img src={img} alt={`slide-${idx}`} style={{width: "100%", height: "40rem", objectFit: "cover", borderRadius: "10px"}}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Swiper modules={[Thumbs]} onSwiper={setThumb} spaceBetween={10} slidesPerView={5}>
                        {images.map((img,idx) => (
                            <SwiperSlide key={idx}>
                                <img src={img} alt={`thub-{idx}`} style={{ width: "100%", height: "10rem", objectFit:"cover", cursor:"pointer"}}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </div>
    )
}

export default Shop;