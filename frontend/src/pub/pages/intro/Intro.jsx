import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

import BlurText from "../../shared/components/BlurText";
import PageTop from "../../shared/components/PageTop";
import { useTheme } from "../../shared/context/ThemeContext";

const Intro = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <PageTop
        isDarkMode={isDarkMode}
        title="Intro"
        description="저희 샵을 소개합니다"
        menuItems={[
          { label: "인사말", link: "/intro/intro" },
          { label: "샵", link: "/intro/shop" },
          { label: "오시는길", link: "/intro/location" },
        ]}
      />
      <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          p: 2,
        }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Box sx={{ position: "relative" }}>
          <Box
            component="img"
            src="/resources/img/main/main_background2.jpg"
            alt=""
            sx={{
              width: "100%",
              height: "auto",
              borderRadius: 2,
              display: "block",
            }}
          />

          <Paper
            elevation={0}
            sx={() => ({
              position: "absolute",
              top: { xs: 16, md: 24 },
              left: { xs: 16, md: 24 },
              maxWidth: { xs: "250px", md: "400px" },
              p: { xs: 1.5, md: 3 },
              backgroundColor: isDarkMode ? "#1a1a1a" : "#ffffff",
              border: `1px solid ${isDarkMode === "dark" ? "#333333" : "#e0e0e0"}`,
              borderRadius: 2,
              transform: "rotate(-2deg)",
              boxShadow: isDarkMode
                ? "0 8px 16px rgba(0, 0, 0, 0.4), 0 4px 8px rgba(0, 0, 0, 0.3)"
                : "0 8px 16px rgba(0, 0, 0, 0.15), 0 4px 8px rgba(0, 0, 0, 0.1)",
              zIndex: 10,
              "&:hover": {
                transform: "rotate(-1deg)",
                boxShadow: isDarkMode
                  ? "0 12px 24px rgba(0, 0, 0, 0.5), 0 6px 12px rgba(0, 0, 0, 0.4)"
                  : "0 12px 24px rgba(0, 0, 0, 0.2), 0 6px 12px rgba(0, 0, 0, 0.15)",
                transition: "all 0.3s ease",
              },
            })}
          >
            <Box sx={{ textAlign: "center", mb: { xs: 1, md: 2 } }}>
              <Typography
                variant="overline"
                sx={{
                  display: "block",
                  fontSize: { xs: "0.75rem", md: "0.875rem" },
                  fontWeight: 500,
                  color: "text.secondary",
                  letterSpacing: "0.1em",
                }}
              >
                미장원
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  color: "text.primary",
                  mt: 0.5,
                  fontSize: { xs: "1.5rem", md: "2.125rem" },
                }}
              >
                by 태현
              </Typography>
            </Box>
            {/* 모바일에서는 텍스트를 간소화 */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <BlurText
                text={
                  "안녕하세요. 김태현 입니다.\n" +
                  "국내 최고의 디자이너 팀과 함께 보다 업그레이드된 기술과 최상의 서비스로 고객님을 모시겠습니다.\n" +
                  "언제나 초심을 잃지않고 최선을 다하겠습니다."
                }
                delay={150}
                animateBy="words"
                direction="top"
                className="mb-3"
              />
            </Box>

            {/* 모바일용 간단한 텍스트 */}
            <Box sx={{ display: { xs: "block", md: "none" }, mb: 2 }}>
              <BlurText
                text={
                  "안녕하세요. 김태현 입니다.\n" +
                  "국내 최고의 디자이너 팀과 함께 보다 업그레이드된 기술과 최상의 서비스로 고객님을 모시겠습니다."
                }
                delay={150}
                animateBy="words"
                direction="top"
                className="mb-3"
              />
            </Box>
            <Box sx={{ textAlign: "center", mt: 3 }}>
              <Button
                variant="contained"
                size={window.innerWidth < 768 ? "small" : "large"} // 모바일에서 버튼 크기 줄임
                sx={() => ({
                  px: { xs: 2, md: 4 },
                  py: { xs: 1, md: 1.5 },
                  borderRadius: 3,
                  textTransform: "none",
                  fontSize: { xs: "0.9rem", md: "1.1rem" }, // 모바일에서 폰트 크기 줄임
                  backgroundColor: isDarkMode ? "#ffffff" : "#000000",
                  color: isDarkMode ? "#000000" : "#ffffff",
                  "&:hover": {
                    backgroundColor: isDarkMode ? "#f0f0f0" : "#333333",
                  },
                })}
                href="#"
              >
                예약하기
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default Intro;
