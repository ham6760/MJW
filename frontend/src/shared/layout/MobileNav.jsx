import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Collapse,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  styled,
  Toolbar,
} from "@mui/material";

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

// 햄버거 메뉴 아이콘 스타일
const HamburgerIcon = styled(Box)(({ open }) => ({
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
    background: "#000",
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

// 커스텀 앱바 스타일
const StyledAppBar = styled(AppBar)(() => ({
  backgroundColor: "rgba(154, 154, 154, 0.7)",
  borderBottom: "3px solid",
  height: 80,
  display: "flex",
  justifyContent: "center",
}));

// 로고 스타일
const LogoImage = styled("img")({
  width: "65%",
  height: "auto",
  objectFit: "contain",
});

// 드로어 스타일
const StyledDrawer = styled(Drawer)(() => ({
  "& .MuiDrawer-paper": {
    backgroundColor: "rgba(154, 154, 154, 0.7)",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backdropFilter: "blur(5px)",
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

// 메뉴 아이템 스타일
const StyledListItemButton = styled(ListItemButton)(() => ({
  color: "#1a1e21",
  padding: "12px 16px",
  "&:hover": {
    color: "#d3d4d5",
  },
}));

// 서브메뉴 아이템 스타일
const SubMenuItemButton = styled(ListItemButton)(() => ({
  color: "#1a1e21",
  paddingLeft: 32,
  "&:hover": {
    color: "#d3d4d5",
  },
}));

const MobileNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState({});

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

  return (
    <Box sx={{ display: { xs: "block", lg: "none" } }}>
      <StyledAppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between", px: 5 }}>
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
            <HamburgerIcon open={menuOpen}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </IconButton>
        </Toolbar>
      </StyledAppBar>

      <StyledDrawer
        anchor="left"
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        variant="temporary"
      >
        <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 1400 }}>
          <IconButton onClick={() => setMenuOpen(false)}>
            <HamburgerIcon open={menuOpen}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </IconButton>
        </Box>
        <MenuList>
          {menuData.map((menu) => (
            <ListItem
              key={menu.key}
              disablePadding
              sx={{ flexDirection: "column", alignItems: "stretch" }}
            >
              <StyledListItemButton
                onClick={() => handleExpandMenu(menu.key)}
                sx={{ justifyContent: "space-between" }}
              >
                <ListItemText
                  primary={menu.label}
                  primaryTypographyProps={{
                    fontFamily: "Montserrat",
                    fontWeight: 700,
                    fontSize: 15,
                    letterSpacing: -1.5,
                  }}
                />
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
                      <ListItemText
                        primary={item.label}
                        primaryTypographyProps={{
                          fontSize: 14,
                        }}
                      />
                    </SubMenuItemButton>
                  ))}
                </List>
              </Collapse>
            </ListItem>
          ))}
        </MenuList>
      </StyledDrawer>
    </Box>
  );
};

export default MobileNav;
