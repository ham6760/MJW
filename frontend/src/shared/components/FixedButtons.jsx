import React, { useEffect, useState } from "react";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Box, Fab, useMediaQuery, Zoom } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useTheme as useMuiTheme } from "@mui/material/styles";
import { useTheme } from "context/ThemeContext";

// 고정 버튼들 컨테이너
const FixedButtonsContainer = styled(Box)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: 1000,
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(1),
  [theme.breakpoints.down("sm")]: {
    bottom: theme.spacing(1),
    right: theme.spacing(1),
  },
}));

// 전화예약 버튼 (PC만)
const PhoneButton = styled(Box)(({ theme, isDarkMode }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: isDarkMode
    ? "rgba(0, 0, 0, 0.8)"
    : "rgba(255, 255, 255, 0.9)",
  color: theme.palette.text.primary,
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(3),
  boxShadow: theme.shadows[6],
  cursor: "pointer",
  textDecoration: "none",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    transform: "scale(1.05)",
  },
  "& img": {
    width: 24,
    height: 24,
    marginRight: theme.spacing(1),
    filter: isDarkMode ? "invert(0)" : "invert(1)",
  },
  "& h3": {
    margin: 0,
    fontSize: "0.875rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
  },
}));

// 스크롤 탑 버튼
const ScrollToTopButton = styled(Fab)(({ theme, isDarkMode }) => ({
  backgroundColor: isDarkMode
    ? "rgba(0, 0, 0, 0.7)"
    : "rgba(255, 255, 255, 0.9)",
  color: theme.palette.text.primary,
  "&:hover": {
    backgroundColor: theme.palette.background.paper,
    transform: "scale(1.1)",
  },
  transition: "all 0.3s ease-in-out",
  boxShadow: theme.shadows[6],
  [theme.breakpoints.down("sm")]: {
    width: 48,
    height: 48,
  },
}));

const FixedButtons = () => {
  const [isScrollTopVisible, setIsScrollTopVisible] = useState(false);
  const { isDarkMode } = useTheme();
  const muiTheme = useMuiTheme();
  const isPC = useMediaQuery(muiTheme.breakpoints.up("lg")); // PC 판단

  // 스크롤 위치 감지
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsScrollTopVisible(true);
      } else {
        setIsScrollTopVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // 페이지 상단으로 스크롤
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 전화 걸기
  const handlePhoneCall = () => {
    window.location.href = "tel:02-517-0792";
  };

  return (
    <FixedButtonsContainer>
      {/* 전화예약 버튼 - PC에서만 표시 */}
      {isPC && (
        <PhoneButton
          component="div"
          onClick={handlePhoneCall}
          isDarkMode={isDarkMode}
        >
          <img src="/resources/img/icon_tel.png" alt="전화 아이콘" />
          <h3>전화예약 02-517-0792</h3>
        </PhoneButton>
      )}

      {/* 스크롤 탑 버튼 - 스크롤 시 표시 */}
      <Zoom in={isScrollTopVisible}>
        <ScrollToTopButton
          onClick={scrollToTop}
          aria-label="scroll to top"
          size="medium"
          isDarkMode={isDarkMode}
        >
          <KeyboardArrowUp />
        </ScrollToTopButton>
      </Zoom>
    </FixedButtonsContainer>
  );
};

export default FixedButtons;
