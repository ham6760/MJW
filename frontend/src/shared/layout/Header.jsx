import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DarkMode,
  ExpandLess,
  ExpandMore,
  KeyboardArrowDown,
  LightMode,
  PersonAdd,
} from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
  useMediaQuery,
  useTheme as useMuiTheme,
} from "@mui/material";
import FixedButtons from "shared/components/FixedButtons";
import { useTheme } from "shared/context/ThemeContext";

import DropdownMenu from "./DropdownMenu";

const menuData = [
  {
    key: "intro",
    label: "Intro",
    items: [
      { to: "/intro/intro", label: "인사말 | Greeting | 问候语" },
      { to: "/intro/shop", label: "샵 | Shop | 店" },
      { to: "/intro/location", label: "오시는길 | Location | 位置" },
    ],
  },
  {
    key: "hair",
    label: "Hair",
    items: [
      { to: "/hair/list", label: "디자이너 | Designer | 设计师" },
      { to: "#", label: "트렌드 | Trend | 潮流" },
      { to: "/hair/gallery", label: "갤러리 | Gallery | 图库" },
    ],
  },
  {
    key: "makeup",
    label: "Makeup",
    items: [
      { to: "/makeUp/list", label: "디자이너 | Designer | 设计师" },
      { to: "#", label: "트렌드 | Trend | 潮流" },
      { to: "/makeUp/gallery", label: "갤러리 | Gallery | 图库" },
    ],
  },
  {
    key: "wedding",
    label: "Wedding",
    items: [
      { to: "#", label: "트렌드 | Trend | 潮流" },
      { to: "/wedding/gallery", label: "갤러리 | Gallery | 图库" },
    ],
  },
  {
    key: "star",
    label: "Star",
    items: [
      { to: "#", label: "매거진 | Magazine | 杂志" },
      { to: "#", label: "뮤비X앨범 | Music video | 音乐视频" },
      { to: "#", label: "광고 | Advertisement | 广告" },
    ],
  },
  {
    key: "nailart",
    label: "Nailart",
    items: [
      { to: "#", label: "디자이너 | Designer | 设计师" },
      { to: "#", label: "트렌드 | Trend | 潮流" },
      { to: "#", label: "갤러리 | Gallery | 图库" },
    ],
  },
  {
    key: "csc",
    label: "Csc",
    items: [
      { to: "#", label: "공지사항 | Notice | 通知" },
      { to: "#", label: "채용안내 | Recruit | 招聘" },
    ],
  },
];

// 커스텀 스타일 앱바 (다크모드 제대로 적용)
const StyledAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})(({ isDarkMode }) => ({
  backgroundColor: isDarkMode
    ? "rgba(30, 30, 30, 0.95)"
    : "rgba(154, 154, 154, 0.7)",
  backdropFilter: "blur(10px)",
  borderBottom: "3px solid rgba(0, 0, 0, 0.1)",
  boxShadow:
    "0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)",
  color: isDarkMode ? "#ffffff" : "#000000",
}));

// 메인 툴바
const MainToolbar = styled(Toolbar)(() => ({
  minHeight: "80px",
  justifyContent: "space-between",
  padding: "0 40px",
  [(theme) => theme.breakpoints.down("lg")]: {
    padding: "0 24px",
  },
}));

// 로고 이미지
const LogoImage = styled("img")(({ theme }) => ({
  height: "50px",
  width: "auto",
  objectFit: "contain",
  [theme.breakpoints.down("lg")]: {
    height: "40px",
  },
}));

// 메뉴 버튼
const MenuButton = styled(Button)(() => ({
  color: "inherit",
  textTransform: "none",
  fontSize: "16px",
  fontWeight: 600,
  fontFamily: "'Montserrat', sans-serif",
  padding: "8px 16px",
  position: "relative",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

// 회원가입 버튼
const SignUpButton = styled(Button)(() => ({
  textTransform: "none",
  fontSize: "14px",
  fontWeight: 500,
  padding: "6px 16px",
  borderRadius: "20px",
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "inherit",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

// 햄버거 메뉴 아이콘 스타일
const HamburgerIcon = styled(Box)(({ open, isDarkMode }) => ({
  width: 30,
  height: 24,
  zIndex: 1,
  position: "relative",
  cursor: "pointer",
  "& span": {
    display: "block",
    position: "absolute",
    height: 3,
    width: "100%",
    background: isDarkMode ? "#ffffff" : "#000000",
    borderRadius: 9,
    opacity: 1,
    left: 0,
    transform: "rotate(0deg)",
    transition: ".25s ease-in-out",
    "&:nth-of-type(1)": {
      top: open ? 10 : 0,
      transform: open ? "rotate(135deg)" : "rotate(0deg)",
    },
    "&:nth-of-type(2)": {
      top: 10,
      opacity: open ? 0 : 1,
      left: open ? -60 : 0,
    },
    "&:nth-of-type(3)": {
      top: open ? 10 : 20,
      transform: open ? "rotate(-135deg)" : "rotate(0deg)",
    },
  },
}));

// 드로어 스타일 (다크모드 적용)
const StyledDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "isDarkMode",
})(({ isDarkMode }) => ({
  "& .MuiDrawer-paper": {
    backgroundColor: isDarkMode
      ? "rgba(30, 30, 30, 0.95)"
      : "rgba(154, 154, 154, 0.7)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(5px)",
    color: isDarkMode ? "#ffffff" : "#000000",
  },
}));

// 메뉴 리스트 스타일
const MenuList = styled(List)(() => ({
  width: "20rem",
  marginTop: 80,
  fontFamily: "Montserrat",
  fontWeight: 700,
  fontSize: 15,
  letterSpacing: -1.5,
}));

// 메뉴 아이템 스타일 (다크모드 적용)
const StyledListItemButton = styled(ListItemButton)(() => ({
  color: "inherit",
  padding: "12px 16px",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

// 서브메뉴 아이템 스타일 (다크모드 적용)
const SubMenuItemButton = styled(ListItemButton)(() => ({
  color: "inherit",
  paddingLeft: 32,
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
}));

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState({});

  const muiTheme = useMuiTheme(); // MUI 테마 (브레이크포인트용)
  const { isDarkMode, toggleTheme } = useTheme();
  const isMobile = useMediaQuery(muiTheme.breakpoints.down("lg"));

  const handleMouseEnter = (menuKey) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setDropdownTimeout(timeout);
  };

  const handleSignUp = () => {
    console.log("회원가입 클릭");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleExpandMenu = (menuKey) => {
    setExpandedMenu((prev) => {
      const isCurrentlyExpanded = prev[menuKey];
      const newState = {};
      if (!isCurrentlyExpanded) {
        newState[menuKey] = true;
      }
      return newState;
    });
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setExpandedMenu({});
  };

  // PC 헤더 렌더링
  const renderPCHeader = () => (
    <MainToolbar>
      {/* 로고 */}
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <LogoImage src="/resources/img/main/logo.png" alt="로고" />
        </Link>
      </Box>

      {/* 메뉴 네비게이션 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {menuData.map((menu) => (
          <Box
            key={menu.key}
            sx={{ position: "relative" }}
            onMouseEnter={() => handleMouseEnter(menu.key)}
            onMouseLeave={handleMouseLeave}
          >
            <MenuButton
              endIcon={<KeyboardArrowDown />}
              sx={{
                "& .MuiButton-endIcon": {
                  transition: "transform 0.2s ease",
                  transform:
                    activeDropdown === menu.key
                      ? "rotate(180deg)"
                      : "rotate(0deg)",
                },
              }}
            >
              {menu.label}
            </MenuButton>

            <DropdownMenu
              menuItem={menu}
              isVisible={activeDropdown === menu.key}
              isDarkMode={isDarkMode} // 여전히 DropdownMenu에는 전달 (DropdownMenu도 Context로 수정 가능)
              onMouseEnter={() => handleMouseEnter(menu.key)}
              onMouseLeave={handleMouseLeave}
            />
          </Box>
        ))}
      </Box>

      {/* 회원가입 & 다크모드 버튼 */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <SignUpButton
          startIcon={<PersonAdd sx={{ fontSize: "18px" }} />}
          onClick={handleSignUp}
        >
          회원가입
        </SignUpButton>

        <IconButton
          onClick={toggleTheme} // Context의 toggleTheme 사용
          sx={{
            color: "inherit",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          {isDarkMode ? <LightMode /> : <DarkMode />}
        </IconButton>
      </Box>
    </MainToolbar>
  );

  // 모바일 헤더 렌더링
  const renderMobileHeader = () => (
    <>
      <MainToolbar>
        <Link to="/" style={{ display: "flex", alignItems: "center" }}>
          <LogoImage src="/resources/img/main/logo.png" alt="로고" />
        </Link>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleMenu}
          sx={{ p: 0 }}
        >
          <HamburgerIcon open={menuOpen} isDarkMode={isDarkMode}>
            <span />
            <span />
            <span />
          </HamburgerIcon>
        </IconButton>
      </MainToolbar>

      <StyledDrawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        variant="temporary"
        isDarkMode={isDarkMode}
      >
        <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1400 }}>
          <IconButton onClick={() => setMenuOpen(false)}>
            <HamburgerIcon open={menuOpen} isDarkMode={isDarkMode}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </IconButton>
        </Box>

        <MenuList>
          {/* 회원가입 & 다크모드 버튼 */}
          <ListItem disablePadding>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "100%",
                justifyContent: "center",
                p: 2,
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                mb: 2,
              }}
            >
              <SignUpButton
                startIcon={<PersonAdd sx={{ fontSize: "18px" }} />}
                onClick={handleSignUp}
                size="small"
              >
                회원가입
              </SignUpButton>

              <IconButton
                onClick={toggleTheme} // Context의 toggleTheme 사용
                sx={{
                  color: "inherit",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {isDarkMode ? <LightMode /> : <DarkMode />}
              </IconButton>
            </Box>
          </ListItem>

          {menuData.map((menu) => (
            <ListItem
              key={menu.key}
              disablePadding사용자에게
              현재
              위치
              요청
              sx={{ flexDirection: "column", alignItems: "stretch" }}
            >
              <StyledListItemButton
                onClick={() => handleExpandMenu(menu.key)}
                sx={{ justifyContent: "space-between" }}
              >
                <ListItemText primary={menu.label} />
                {expandedMenu[menu.key] ? <ExpandLess /> : <ExpandMore />}
              </StyledListItemButton>

              <Collapse
                in={expandedMenu[menu.key]}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  {menu.items.map((item, index) => (
                    <SubMenuItemButton
                      key={index}
                      component={Link}
                      to={item.to}
                      onClick={handleMenuItemClick}
                    >
                      <ListItemText primary={item.label} />
                    </SubMenuItemButton>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          ))}
        </MenuList>
      </StyledDrawer>
    </>
  );

  return (
    <>
      <StyledAppBar position="fixed" isDarkMode={isDarkMode}>
        {isMobile ? renderMobileHeader() : renderPCHeader()}
      </StyledAppBar>

      <FixedButtons />
    </>
  );
};

export default Header;
