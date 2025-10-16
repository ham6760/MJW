import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { useTheme } from "../context/ThemeContext";

const icons = {
  smartStore: () => {
    const { isDarkMode } = useTheme();
    return (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        {/* Background Circle */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill={
              isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"
          />
        </svg>
        {/* Cart Icon */}
        <svg
          style={{
            position: "relative",
            zIndex: 1,
            width: "50%",
            height: "50%",
            margin: "25%",
          }}
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill={isDarkMode ? "#ffffff" : "#000000"}
            d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
      </Box>
    );
  },
  youtube: () => {
    const { isDarkMode } = useTheme();
    return (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        {/* Background Circle */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill={
              isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"
          />
        </svg>
        {/* YouTube Icon */}
        <svg
          style={{
            position: "relative",
            zIndex: 1,
            width: "60%",
            height: "60%",
            margin: "20%",
          }}
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill={isDarkMode ? "#ffffff" : "#000000"}
            d="M549.65,124.08a67.44,67.44,0,0,0-47.58-47.58C465.16,64,288,64,288,64S110.84,64,73.93,76.5a67.44,67.44,0,0,0-47.58,47.58C13,161,13,256,13,256s0,95,13.35,131.92a67.44,67.44,0,0,0,47.58,47.58C110.84,448,288,448,288,448s177.16,0,214.07-12.5a67.44,67.44,0,0,0,47.58-47.58C563,351,563,256,563,256S563,161,549.65,124.08ZM231.81,334.47V177.53L364.59,256Z"
          />
        </svg>
      </Box>
    );
  },
  instagram: () => {
    const { isDarkMode } = useTheme();
    return (
      <Box sx={{ position: "relative", display: "inline-block" }}>
        {/* Background Circle */}
        <svg
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill={
              isDarkMode ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
            }
            d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z"
          />
        </svg>
        {/* Instagram Icon */}
        <svg
          style={{
            position: "relative",
            zIndex: 1,
            width: "50%",
            height: "50%",
            margin: "25%",
          }}
          aria-hidden="true"
          focusable="false"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill={isDarkMode ? "#ffffff" : "#000000"}
            d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66ZM224,338.8a82.8,82.8,0,1,1,82.8-82.8A82.89,82.89,0,0,1,224,338.8ZM370.51,139.6a25.11,25.11,0,1,1-25.1-25.1A25.08,25.08,0,0,1,370.51,139.6ZM448,80V432a48.05,48.05,0,0,1-48,48H48A48.05,48.05,0,0,1,0,432V80A48.05,48.05,0,0,1,48,32H400A48.05,48.05,0,0,1,448,80ZM402.67,80a6.7,6.7,0,0,0-6.67-6.67H51.33A6.7,6.7,0,0,0,44.67,80V432a6.7,6.7,0,0,0,6.66,6.67H396a6.7,6.7,0,0,0,6.67-6.67ZM224,125.1a130.9,130.9,0,1,0,130.9,130.9A130.9,130.9,0,0,0,224,125.1Z"
          />
        </svg>
      </Box>
    );
  },
};

// 스타일 컨테이너
const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  transition: "all 0.3s ease",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    transform: "translateY(-8px)",
  },
}));

// 아이콘 래퍼
const IconWrapper = styled(Box)(({ theme }) => ({
  width: "120px",
  height: "120px",
  marginBottom: theme.spacing(2),
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "100px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80px",
    height: "80px",
  },
}));

// 제목 스타일
const IconTitle = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 600,
  fontSize: "1.25rem",
  marginBottom: theme.spacing(1),
  color: "inherit",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1rem",
  },
}));

// 링크 라벨 스타일
const LinkLabel = styled(Typography)(({ theme }) => ({
  fontFamily: "'Montserrat', sans-serif",
  fontWeight: 400,
  fontSize: "0.875rem",
  opacity: 0.7,
  transition: "color 0.3s ease",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.75rem",
  },
}));

const IconBlock = ({ label, icon, to, linkLabel }) => {
  const { isDarkMode } = useTheme();

  const iconComponent = icons[icon];
  if (!iconComponent) return null;

  return (
    <IconContainer
      component="a"
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        "&:hover": {
          backgroundColor: isDarkMode
            ? "rgba(255, 255, 255, 0.05)"
            : "rgba(0, 0, 0, 0.05)",
          boxShadow: isDarkMode
            ? "0 8px 25px rgba(255, 255, 255, 0.1)"
            : "0 8px 25px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <IconWrapper>{iconComponent()}</IconWrapper>

      <IconTitle variant="h5">{label}</IconTitle>

      <LinkLabel variant="body2">{linkLabel}</LinkLabel>
    </IconContainer>
  );
};

export default IconBlock;
