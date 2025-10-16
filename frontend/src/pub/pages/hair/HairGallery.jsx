import React from "react";
import { Box, Container } from "@mui/material";

import CircularGallery from "../../shared/components/circularGallery/CircularGallery";
import PageTop from "../../shared/components/PageTop";
import { usePageConfig } from "../../shared/hooks/usePageConfig";

const HairGallery = () => {
  const pageData = usePageConfig();
  const items = [
    {
      image: "/resources/img/hair/gallery/hair_img_1.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_2.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_3.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_4.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_5.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_6.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_7.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_8.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_9.jpg",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_10.jfif",
      text: "",
    },
    {
      image: "/resources/img/hair/gallery/hair_img_11.jfif",
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

export default HairGallery;
