import React, {useEffect, useState} from "react";
import IconBlock from "../components/Icons";

const Home = () => {
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

    const link = [
        {
            key: "smartStore",
            label: "SmartStore",
            icon: "smartStore",
            to: "https://smartstore.naver.com/mizangwonbytaehyun",
            linkLabel: "미장원by태현 SmartStore"
        },
        {
            key: "youtube",
            label: "Youtube",
            icon: "youtube",
            to: "https://www.youtube.com/channel/UCLZSItuQZ1B_iJa-r3mm2aw",
            linkLabel: "미장원by태현 Youtube"
        },
        {
            key: "instagram",
            label: "Instagram",
            icon: "instagram",
            to: "https://www.instagram.com/mizangwonbytaehyun/",
            linkLabel: "미장원by태현 Instagram"
        }
    ]
    const [videos, setVideos] = useState([]);

    // youtube useEffect
    /*useEffect(() => {
        fetch("/videos")
            .then((res) => res.json())
            .then((json) => setVideos(json))
            .catch((err) => console.error("youtube fetch fail:", err));
    }, []);*/

    return (
        <div id="page-top">
            <header className="masthead d-flex align-items-center"></header>
            <section className="page-section" id="services">
                <div className="container text-center">
                    <h1 className="section-heading text-uppercase">Social Media</h1>
                    <div className="row text-center">
                        {link.map((item) => (
                            <IconBlock key={item.key} to={item.to} icon={item.icon} label={item.label}
                                       linkLabel={item.linkLabel}/>
                        ))}
                    </div>
                </div>
            </section>

            <section className="page-section" id="portfolio">
                <div className="container text-center">
                    <h1 className="section-heading text-uppercase">YOUTUBE</h1>
                    <div className="row text-center">
                        {videos.map((video) => (
                            <div className="col-md-4" key={video.videoId}>
                                <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank"
                                   rel="noreferrer">
                                    <div className="video_thumbnail">
                                        <img src={video.thumbnail} alt={video.title}/>
                                        <p className="video_title text-white">{video.title}</p>
                                    </div>
                                </a>
                            </div>
                        ))}
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
                                    <img className="img-fluid" src={`/resources/img/main/${item.image}`}
                                         alt={item.alt}/>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;