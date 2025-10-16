import React from "react";
import { Box, Container } from "@mui/material";

import CircularGallery from "../../shared/components/circularGallery/CircularGallery";
import PageTop from "../../shared/components/PageTop";
import { usePageConfig } from "../../shared/hooks/usePageConfig";

const WeddingGallery = () => {
  const pageData = usePageConfig();
  const items = [
    {
      image: "/resources/img/wedding/wedding_img_1.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_2.png",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_3.jfif",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_4.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_5.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_6.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_7.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_8.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_9.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_10.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_11.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_12.jpg",
      text: "",
    },
    {
      image: "/resources/img/wedding/wedding_img_13.jpg",
      text: "",
    },
  ];

  return (
    <>
      <PageTop {...pageData} />
      <Box
        component="section"
        data-aos="fade-up"
        data-aos-delay="100"
        sx={{ py: 4 }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "80%",
              height: "600px",
              mx: "auto",
            }}
          >
            <CircularGallery
              items={items}
              bend={3}
              textColor="#ffffff"
              borderRadius={0.05}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default WeddingGallery;
