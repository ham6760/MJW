import React from "react";
import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterWrapper = styled("footer")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: "#fff",
  textAlign: "center",
  padding: theme.spacing(4, 0),
  marginTop: "auto", // Sticky footer를 위한 설정
}));

const FooterText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "0.875rem", // small equivalent
  marginBottom: 0,
  lineHeight: 1.6,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.75rem",
    padding: theme.spacing(0, 1),
  },
}));

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg" sx={{ px: { xs: 2, lg: 5 } }}>
        <FooterText variant="body2">
          상호명: 미장원by태현 | 대표 : 김지영 | 사업자등록번호 : 211-10-85501 |
          주소 : 서울특별시 강남구도산대로75길 14-1
        </FooterText>
        <FooterText variant="body2">
          Adr : 14-1, Dosan-daero 75-gil, Gangnam-gu, Seoul, Republic of Korea |
          Tel.02-517-0792
        </FooterText>
        <FooterText variant="body2">
          Copyright © 2015 미장원by태현 All Rights Reserved. Hosting by inpiad
        </FooterText>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
