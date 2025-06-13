import React from "react";
import KakaoMap from "../services/KakaoMap"
import { Link } from 'react-router-dom';

const Location = () => {
    return (
        <div id="page-top">
            <header className="masthead sub d-flex align-items-center"></header>
            <div className="sub_menu w33p">
                <div className="inner">
                    <ul>
                        <li><strong><Link to="/intro">인사말</Link></strong></li>
                        <li><strong><Link to="/shop">샵</Link></strong></li>
                        <li className="cur"><strong><Link to="#">오시는길</Link></strong></li>
                    </ul>
                </div>
            </div>
            <KakaoMap/>
        </div>
    )
}

export default Location;