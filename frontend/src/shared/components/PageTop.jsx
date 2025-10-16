import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Box,
  Container,
  List,
  ListItem,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import SplitText from "./SplitText";

const PageTopWrapper = styled(Box)({
  position: "relative",
});

const MastheadBox = styled(Box)(({ theme }) => ({
  minHeight: "50vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  "& > *": {
    position: "relative",
    zIndex: 2,
  },
  [theme.breakpoints.down("md")]: {
    minHeight: "40vh",
    backgroundAttachment: "scroll",
    paddingTop: "150px", // 헤더 높이만큼 여백 추가 (필요에 따라 조정)
    alignItems: "flex-start", // 상단 정렬로 변경
  },
}));

const BannerText = styled(Box)(({ theme }) => ({
  textAlign: "center",
  color: theme.palette.text.primary,
  "& h1": {
    fontSize: "3.5rem",
    fontWeight: "bold",
    marginBottom: theme.spacing(2),
    textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem", // 모바일에서 폰트 크기 조정
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2rem", // 더 작은 화면에서 더 작게
    },
  },
  "& p": {
    fontSize: "1.2rem",
    opacity: 0.9,
    textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem", // 모바일에서 폰트 크기 조정
    },
  },
}));

const SubMenuSection = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  borderRadius: 0,
  position: "relative",
  zIndex: 3,
}));

const SubMenuList = styled(List)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  margin: 0,
  flexWrap: "wrap",
  /*[theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },*/
}));

const SubMenuItem = styled(ListItem)(({ theme, isActive }) => ({
  flex: 1,
  maxWidth: "200px",
  padding: 0,
  justifyContent: "center",
  "& a": {
    display: "block",
    width: "100%",
    padding: theme.spacing(2, 3),
    textDecoration: "none",
    color: isActive ? theme.palette.primary.main : theme.palette.text.primary,
    fontWeight: isActive ? "bold" : "normal",
    textAlign: "center",
    borderBottom: isActive
      ? `3px solid ${theme.palette.primary.main}`
      : "3px solid transparent",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.action.hover,
      color: theme.palette.primary.main,
      borderBottomColor: theme.palette.primary.main,
    },
  },
  "&:not(:last-child)": {
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down("sm")]: {
      borderRight: "none",
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
  [theme.breakpoints.down("sm")]: {
    maxWidth: "100%",
    width: "100%",
  },
}));

const PageTop = ({ title, description, menuItems }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const enhancedItems = menuItems.map((item) => ({
    ...item,
    isActive: currentPath === item.link,
  }));

  return (
    <PageTopWrapper id="page-top">
      <MastheadBox>
        <BannerText>
          <Typography component="h1" variant="h1">
            <SplitText
              text={title}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </Typography>
          <Typography component="p" variant="h6">
            <SplitText
              text={description}
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </Typography>
        </BannerText>
      </MastheadBox>

      <SubMenuSection data-aos="fade-up" data-aos-delay="100" elevation={2}>
        <Container maxWidth="md">
          <SubMenuList>
            {enhancedItems.map((item, idx) => (
              <SubMenuItem key={idx} isActive={item.isActive}>
                <Link to={item.link}>
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{ fontWeight: "inherit" }}
                  >
                    {item.label}
                  </Typography>
                </Link>
              </SubMenuItem>
            ))}
          </SubMenuList>
        </Container>
      </SubMenuSection>
    </PageTopWrapper>
  );
};

export default PageTop;
