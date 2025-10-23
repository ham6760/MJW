import React, { useEffect } from "react";
import { Box, Container } from "@mui/material";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useTheme } from "shared/context/ThemeContext";

const KakaoMap = () => {
  const { isDarkMode } = useTheme(); // 커스텀 다크모드 상태
  const muiTheme = useMuiTheme(); // MUI 테마

  useEffect(() => {
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_KEY}&autoload=false`;
    script.async = true;

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const centerPosition = new window.kakao.maps.LatLng(
          37.525373437461056,
          127.0460883143023,
        );

        // 화면 크기에 따른 초기 레벨 설정
        const getMapLevel = () => {
          const width = window.innerWidth;
          if (width < 600) return 5; // 모바일: 더 넓은 범위
          if (width < 960) return 4; // 태블릿
          return 3; // 데스크톱: 더 자세한 뷰
        };

        const option = {
          center: centerPosition,
          level: getMapLevel(),
        };

        const map = new window.kakao.maps.Map(container, option);
        const marker = new window.kakao.maps.Marker({
          position: centerPosition,
        });
        marker.setMap(map);

        // ResizeObserver를 사용한 더 정확한 크기 감지
        const resizeObserver = new ResizeObserver(() => {
          setTimeout(() => {
            map.relayout();
            map.setCenter(centerPosition);
            // 화면 크기에 따라 지도 레벨도 조정
            map.setLevel(getMapLevel());
          }, 100);
        });

        // 지도 컨테이너 관찰 시작
        resizeObserver.observe(container);

        // 윈도우 리사이즈도 함께 처리 (브라우저 호환성)
        const resizeMap = () => {
          setTimeout(() => {
            map.relayout();
            map.setCenter(centerPosition);
            map.setLevel(getMapLevel());
          }, 100);
        };

        window.addEventListener("resize", resizeMap);

        const backgroundColor = isDarkMode ? "#2a2a2a" : "#ffffff";
        const textColor = isDarkMode ? "#ffffff" : "#000000";
        const linkColor = isDarkMode ? "#90caf9" : "#1976d2"; // MUI primary.light : primary.main
        const borderColor = isDarkMode ? "#555555" : "#dddddd";

        const iwContent = `
          <div style="
            padding: 15px; 
            min-width: 220px;
            background-color: ${backgroundColor};
            color: ${textColor};
            border: 1px solid ${borderColor};
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0,0,0,${isDarkMode ? "0.4" : "0.15"});
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          ">
            <div style="
              font-weight: bold; 
              font-size: 16px;
              margin-bottom: 10px;
              color: ${textColor};
            ">
              미장원바이태현
            </div>
            <div style="
              font-size: 13px;
              color: ${isDarkMode ? "#cccccc" : "#666666"};
              margin-bottom: 12px;
            ">
            </div>
            <div style="display: flex; gap: 12px;">
              <a href="https://map.kakao.com/link/map/미장원바이태현,37.525373437461056,127.0460883143023" 
                 style="
                   color: ${linkColor}; 
                   text-decoration: none;
                   font-size: 13px;
                   font-weight: 500;
                   padding: 6px 12px;
                   background-color: ${isDarkMode ? "rgba(144, 202, 249, 0.1)" : "rgba(25, 118, 210, 0.1)"};
                   border-radius: 4px;
                   transition: all 0.2s;
                 " 
                 target="_blank"
                 onmouseover="this.style.backgroundColor='${isDarkMode ? "rgba(144, 202, 249, 0.2)" : "rgba(25, 118, 210, 0.2)"}'"
                 onmouseout="this.style.backgroundColor='${isDarkMode ? "rgba(144, 202, 249, 0.1)" : "rgba(25, 118, 210, 0.1)"}'">
                큰지도보기
              </a>
              <a href="https://map.kakao.com/link/to/미장원바이태현,37.525373437461056,127.0460883143023" 
                 style="
                   color: ${linkColor}; 
                   text-decoration: none;
                   font-size: 13px;
                   font-weight: 500;
                   padding: 6px 12px;
                   background-color: ${isDarkMode ? "rgba(144, 202, 249, 0.1)" : "rgba(25, 118, 210, 0.1)"};
                   border-radius: 4px;
                   transition: all 0.2s;
                 " 
                 target="_blank"
                 onmouseover="this.style.backgroundColor='${isDarkMode ? "rgba(144, 202, 249, 0.2)" : "rgba(25, 118, 210, 0.2)"}'"
                 onmouseout="this.style.backgroundColor='${isDarkMode ? "rgba(144, 202, 249, 0.1)" : "rgba(25, 118, 210, 0.1)"}'">
                길찾기
              </a>
            </div>
          </div>
        `;

        const infowindow = new window.kakao.maps.InfoWindow({
          position: centerPosition,
          content: iwContent,
          removable: false,
        });

        infowindow.open(map, marker);

        // 클린업
        return () => {
          resizeObserver.disconnect();
          window.removeEventListener("resize", resizeMap);
        };
      });
    };

    document.head.appendChild(script);
  }, [isDarkMode]);

  return (
    <Box
      component="section"
      sx={{ py: 4 }}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <Container maxWidth="lg">
        <Box
          id="map"
          sx={{
            width: "100%",
            height: { xs: "300px", md: "500px" },
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: muiTheme.shadows[3],
          }}
        />
      </Container>
    </Box>
  );
};

export default KakaoMap;
