import React, {useEffect, useState} from "react";
import IconBlock from "../components/Icons";
import KakaoMap from "../services/KakaoMap"

const Home = () => {
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
                            <IconBlock key={item.key} to={item.to} icon={item.icon} label={item.label} linkLabel={item.linkLabel}/>
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

            <KakaoMap />
        </div>
    );
};

export default Home;