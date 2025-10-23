import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import {
  Box,
  Container,
  Fade,
  IconButton,
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PageTop from "shared/components/PageTop";

const images = [
  "/resources/img/shop/shop_img_1.jpg",
  "/resources/img/shop/shop_img_2.jpg",
  "/resources/img/shop/shop_img_3.jpg",
  "/resources/img/shop/shop_img_4.jpg",
  "/resources/img/shop/shop_img_5.jpg",
  "/resources/img/shop/shop_img_6.jpg",
];

const Shop = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // 자동 슬라이드
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <PageTop
        title="Shop"
        description="미장원 by 태현 이미지"
        menuItems={[
          { label: "인사말", link: "/intro/intro" },
          { label: "샵", link: "/intro/shop" },
          { label: "오시는길", link: "/intro/location" },
        ]}
      />

      <Box
        component="section"
        sx={{ py: 8 }}
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Container maxWidth="lg">
          {/* 메인 이미지 슬라이더 */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: { xs: "300px", md: "500px" },
              borderRadius: 3,
              overflow: "hidden",
              mb: 3,
              boxShadow: theme.shadows[8],
            }}
          >
            <Fade in={true} timeout={500} key={currentIndex}>
              <Box
                component="img"
                src={images[currentIndex]}
                alt={`slide-${currentIndex}`}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </Fade>

            {/* 네비게이션 버튼 */}
            <IconButton
              onClick={goToPrevious}
              sx={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                zIndex: 2,
              }}
            >
              <ChevronLeft fontSize="large" />
            </IconButton>

            <IconButton
              onClick={goToNext}
              sx={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                },
                zIndex: 2,
              }}
            >
              <ChevronRight fontSize="large" />
            </IconButton>

            {/* 인디케이터 점들 */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: 1,
                zIndex: 2,
              }}
            >
              {images.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => handleThumbnailClick(index)}
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: "50%",
                    backgroundColor:
                      index === currentIndex
                        ? "white"
                        : "rgba(255, 255, 255, 0.5)",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "white",
                    },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* 썸네일 리스트 */}
          <ImageList
            sx={{
              width: "100%",
              height: { xs: 80, md: 120 },
              overflow: "auto",
              "&::-webkit-scrollbar": {
                height: 8,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.grey[200],
                borderRadius: 4,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.grey[400],
                borderRadius: 4,
                "&:hover": {
                  backgroundColor: theme.palette.grey[600],
                },
              },
            }}
            variant="quilted"
            cols={isMobile ? 4 : 6}
            rowHeight={isMobile ? 80 : 120}
          >
            {images.map((img, index) => (
              <ImageListItem
                key={index}
                sx={{
                  cursor: "pointer",
                  border:
                    index === currentIndex
                      ? `3px solid ${theme.palette.primary.main}`
                      : "3px solid transparent",
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "all 0.3s ease",
                  opacity: index === currentIndex ? 1 : 0.7,
                  "&:hover": {
                    opacity: 1,
                    transform: "scale(1.05)",
                  },
                }}
                onClick={() => handleThumbnailClick(index)}
              >
                <img
                  src={img}
                  alt={`thumbnail-${index}`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      </Box>
    </>
  );
};

export default Shop;
