import React from "react";
import { Link } from "react-router-dom";
import {
  Fade,
  MenuItem,
  MenuList,
  Paper,
  styled,
  Typography,
} from "@mui/material";

// 드롭다운 컨테이너 (다크모드 제대로 적용)
const DropdownContainer = styled(Paper, {
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})(({ isDarkMode }) => ({
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: isDarkMode
    ? "rgba(50, 50, 50, 0.95)"
    : "rgba(154, 154, 154, 0.95)",
  backdropFilter: "blur(10px)",
  borderRadius: "12px",
  boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
  minWidth: "280px",
  zIndex: 1001,
  marginTop: "8px",
  overflow: "hidden",
  border: isDarkMode
    ? "1px solid rgba(255, 255, 255, 0.1)"
    : "1px solid rgba(0, 0, 0, 0.1)",
}));

// 드롭다운 메뉴 아이템 (다크모드 제대로 적용)
const StyledMenuItem = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})(({ isDarkMode }) => ({
  padding: "12px 24px",
  fontSize: "14px",
  fontFamily: "'Montserrat', sans-serif",
  color: isDarkMode ? "#e0e0e0" : "#1a1e21",
  borderLeft: "3px solid transparent",
  transition: "all 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
  "&:hover": {
    backgroundColor: isDarkMode
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(255, 255, 255, 0.1)",
    color: isDarkMode ? "#ffffff" : "#d3d4d5",
    borderLeftColor: isDarkMode ? "#ffffff" : "#d3d4d5",
  },
}));

const DropdownMenu = ({
  menuItem,
  isVisible,
  isDarkMode = false,
  onMouseEnter,
  onMouseLeave,
}) => {
  if (!menuItem || !menuItem.items) return null;

  return (
    <Fade in={isVisible} timeout={200}>
      <DropdownContainer
        isDarkMode={isDarkMode}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        sx={{
          display: isVisible ? "block" : "none",
        }}
      >
        <MenuList sx={{ py: 1 }}>
          {menuItem.items.map((item, index) => (
            <StyledMenuItem
              component={Link}
              key={index}
              to={item.to}
              isDarkMode={isDarkMode}
            >
              <Typography variant="body2" component="span">
                {item.label}
              </Typography>
            </StyledMenuItem>
          ))}
        </MenuList>
      </DropdownContainer>
    </Fade>
  );
};

export default DropdownMenu;
