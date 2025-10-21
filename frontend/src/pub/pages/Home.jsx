import "aos/dist/aos.css"; // AOS CSS import

import React, { useEffect, useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import IconBlock from "../../shared/components/Icons";

const SPACING = { section: 8, card: 4, title: 6 };

const MastheadBox = styled(Box)(({ theme }) => ({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundImage: "url(/resources/img/main/main_background.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
  marginBottom: theme.spacing(4),
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  "& > *": { position: "relative", zIndex: 2 },
  [theme.breakpoints.down("md")]: {
    minHeight: "70vh",
    backgroundAttachment: "scroll",
  },
  [theme.breakpoints.down("sm")]: { minHeight: "60vh" },
}));

const SectionBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(SPACING.section, 0),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontWeight: "bold",
  textTransform: "uppercase",
  color: theme.palette.grey,
  textAlign: "center",
  marginBottom: theme.spacing(SPACING.title),
}));

const PortfolioCard = styled(Card)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  borderRadius: theme.spacing(2),
  "&:hover": {
    transform: "translateY(-12px) scale(1.02)",
    boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
    "& .portfolio-overlay": {
      opacity: 1,
    },
    "& .portfolio-image": {
      transform: "scale(1.1)",
    },
  },
  [theme.breakpoints.down("md")]: {
    "&:hover": {
      transform: "translateY(-8px) scale(1.01)",
      boxShadow: "0 15px 30px rgba(0,0,0,0.12)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    "&:hover": {
      transform: "translateY(-6px)",
      boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    },
  },
}));

const PortfolioOverlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "linear-gradient(45deg, rgba(0,0,0,0.7), rgba(0,0,0,0.3))",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  backdropFilter: "blur(2px)",
}));

const YouTubeCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer",
  "&:hover": { transform: "translateY(-8px)", boxShadow: theme.shadows[4] },
}));

const Home = () => {
  const [videos, setVideos] = useState([]);

  const portfolioData = [
    {
      key: "hair",
      label: "Hair",
      image: "main_photo1.png",
      alt: "헤어_이미지",
    },
    {
      key: "makeup",
      label: "MakeUp",
      image: "main_photo1.png",
      alt: "메이크업_이미지",
    },
    {
      key: "wedding",
      label: "Wedding",
      image: "main_photo1.png",
      alt: "웨딩_이미지",
    },
    {
      key: "star",
      label: "Star",
      image: "main_photo1.png",
      alt: "연예인_이미지",
    },
    {
      key: "nailArt",
      label: "NailArt",
      image: "main_photo1.png",
      alt: "네일_이미지",
    },
  ];

  const socialLinks = [
    {
      key: "smartStore",
      label: "SmartStore",
      icon: "smartStore",
      to: "https://smartstore.naver.com/mizangwonbytaehyun",
      linkLabel: "미장원by태현 SmartStore",
    },
    {
      key: "youtube",
      label: "Youtube",
      icon: "youtube",
      to: "https://www.youtube.com/channel/UCLZSItuQZ1B_iJa-r3mm2aw",
      linkLabel: "미장원by태현 Youtube",
    },
    {
      key: "instagram",
      label: "Instagram",
      icon: "instagram",
      to: "https://www.instagram.com/mizangwonbytaehyun/",
      linkLabel: "미장원by태현 Instagram",
    },
  ];

  useEffect(() => {
    // YouTube 비디오 데이터 fetch
    fetch("/videos")
      .then((res) => res.json())
      .then((json) => setVideos(json))
      .catch((err) => console.error("YouTube fetch fail:", err));
  }, []);

  const handleVideoClick = (video) => {
    const url = video.url || `https://www.youtube.com/watch?v=${video.videoId}`;
    window.open(url, "_blank");
  };

  const renderPortfolioCard = (item, cardSx = {}, index = 0) => (
    <PortfolioCard
      key={item.key}
      sx={cardSx}
      data-aos="zoom-in"
      data-aos-delay={index * 100} // 순차적으로 나타나는 효과
    >
      <CardMedia
        component="img"
        image={`/resources/img/main/${item.image}`}
        alt={item.alt}
        sx={{
          objectFit: "cover",
          transition: "transform 0.3s ease-in-out",
          "&:hover": { transform: "scale(1.05)" },
          height: { xs: 280, sm: 320, md: 280, lg: 320, xl: 350 },
        }}
      />
      <PortfolioOverlay className="portfolio-overlay">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: "white",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 2,
            fontSize: {
              xs: "1.8rem",
              sm: "2rem",
              md: "1.8rem",
              lg: "2.2rem",
              xl: "2.5rem",
            },
          }}
        >
          {item.label}
        </Typography>
      </PortfolioOverlay>
    </PortfolioCard>
  );

  return (
    <Box id="page-top">
      <MastheadBox />

      {/* Social Media Section */}
      <SectionBox id="services" data-aos="fade-up" data-aos-delay="100">
        <Container maxWidth="lg">
          <SectionTitle variant="h2" component="h1" data-aos="fade-down">
            Social Media
          </SectionTitle>
          <Grid container spacing={10} justifyContent="center">
            {socialLinks.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={item.key}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "80%",
                    md: "220px",
                    lg: "260px",
                    xl: "300px",
                  },
                }}
                data-aos="fade-up"
                data-aos-delay={200 + index * 150} // 순차적으로 나타나는 효과
              >
                <IconBlock
                  to={item.to}
                  icon={item.icon}
                  label={item.label}
                  linkLabel={item.linkLabel}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionBox>

      {/* YouTube Section */}
      <SectionBox
        id="portfolio_youtube"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Container maxWidth="xl">
          <SectionTitle variant="h2" component="h1" data-aos="fade-down">
            YouTube
          </SectionTitle>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 3, lg: 4 },
              justifyContent: "center",
              overflowX: { xs: "visible", md: "auto" },
              px: 2,
              pb: 2,
              flexWrap: "wrap",
              "&::-webkit-scrollbar": { height: "8px" },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "rgba(0,0,0,0.2)",
                borderRadius: "4px",
              },
            }}
          >
            {videos.map((video, index) => (
              <YouTubeCard
                key={video.id || index}
                onClick={() => handleVideoClick(video)}
                sx={{
                  width: {
                    xs: "100%",
                    sm: "80%",
                    md: "260px",
                    lg: "300px",
                    xl: "340px",
                  },
                  flexShrink: 0,
                  mx: { xs: "auto", md: 0 },
                  mb: { xs: 2, md: 0 },
                }}
                data-aos="flip-left"
                data-aos-delay={300 + index * 100} // 순차적으로 나타나는 효과
              >
                <CardMedia
                  component="img"
                  image={
                    video.thumbnail ||
                    `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`
                  }
                  alt={video.title || `YouTube Video ${index + 1}`}
                  sx={{
                    objectFit: "cover",
                    height: { xs: 160, md: 160, lg: 180, xl: 200 },
                  }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      fontSize: { md: "1rem", lg: "1.1rem", xl: "1.25rem" },
                    }}
                  >
                    {video.title || `YouTube Video ${index + 1}`}
                  </Typography>
                  {video.description && (
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        mt: 1,
                      }}
                    >
                      {video.description}
                    </Typography>
                  )}
                </CardContent>
                <CardActions
                  sx={{ justifyContent: "space-between", px: 2, pb: 2 }}
                >
                  <Box display="flex" alignItems="center">
                    <PlayArrowIcon sx={{ color: "red", mr: 0.5 }} />
                    <Typography variant="caption" color="text.secondary">
                      {video.duration || "YouTube"}
                    </Typography>
                  </Box>
                  {video.publishedAt && (
                    <Typography variant="caption" color="text.secondary">
                      {new Date(video.publishedAt).toLocaleDateString("ko-KR")}
                    </Typography>
                  )}
                </CardActions>
              </YouTubeCard>
            ))}
          </Box>
          {videos.length === 0 && (
            <Typography
              variant="body1"
              textAlign="center"
              color="textSecondary"
              data-aos="fade-in"
            >
              YouTube 콘텐츠를 불러오는 중입니다...
            </Typography>
          )}
        </Container>
      </SectionBox>

      {/* Portfolio Section */}
      <SectionBox id="portfolio_menu" data-aos="fade-up" data-aos-delay="300">
        <Container maxWidth="xl">
          <SectionTitle variant="h2" component="h1" data-aos="fade-down">
            Portfolio(포트폴리오)
          </SectionTitle>

          {/* 첫 번째 줄: Hair, MakeUp */}
          <Grid container spacing={1} sx={{ mb: 1 }} justifyContent="center">
            {portfolioData.slice(0, 2).map((item, index) => (
              <Grid item xs={6} key={item.key}>
                {renderPortfolioCard(
                  item,
                  {
                    maxWidth: { lg: "450px", xl: "500px" },
                    margin: "0 auto",
                  },
                  index,
                )}
              </Grid>
            ))}
          </Grid>

          {/* 두 번째 줄: Wedding, Star, NailArt */}
          <Grid container spacing={1} justifyContent="center">
            {portfolioData.slice(2).map((item, index) => (
              <Grid item xs={4} key={item.key}>
                {renderPortfolioCard(
                  item,
                  {
                    maxWidth: { lg: "280px", xl: "320px" },
                    margin: "0 auto",
                  },
                  index + 2,
                )}
              </Grid>
            ))}
          </Grid>
        </Container>
      </SectionBox>
    </Box>
  );
};

export default Home;
