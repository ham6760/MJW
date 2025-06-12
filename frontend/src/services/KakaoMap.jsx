import {useEffect} from "react";

const KakaoMap = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;
        script.async = true;

        script.onload = () => {
            window.kakao.maps.load(() => {
                const container = document.getElementById('map');
                const option = {
                    center: new window.kakao.maps.LatLng(37.525373437461056, 127.0460883143023),
                    level: 4
                };

                const map = new window.kakao.maps.Map(container, option);
                const markerPosition = new window.kakao.maps.LatLng(37.525373437461056, 127.0460883143023);
                // 마커를 생성합니다
                const marker = new window.kakao.maps.Marker({
                    position: markerPosition
                });
                marker.setMap(map);

                const iwContent = '<div style="padding:5px;">미장원바이태현 <br><a href="https://map.kakao.com/link/map/미장원바이태현,37.525373437461056, 127.0460883143023" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/미장원바이태현,37.525373437461056, 127.0460883143023" style="color:blue" target="_blank">길찾기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
                    iwPosition = new window.kakao.maps.LatLng(37.525373437461056, 127.0460883143023); //인포윈도우 표시 위치입니다

                // 인포윈도우를 생성합니다
                const infowindow = new window.kakao.maps.InfoWindow({
                    position: iwPosition,
                    content: iwContent
                });

                // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
                infowindow.open(map, marker);
            });
        };
        document.head.appendChild(script);
    }, []);

    return <div className="map" id="map"></div>;

};
export default KakaoMap;