import React from "react";
import { Box, Container } from "@mui/material";

import CircularGallery from "../../shared/components/circularGallery/CircularGallery";
import PageTop from "../../shared/components/PageTop";
import { usePageConfig } from "../../shared/hooks/usePageConfig";

const MakeUpGallery = () => {
  const pageData = usePageConfig();
  const items = [
    {
      image: "/resources/img/makeUp/gallery/make_img_1.jpg",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_2.jpg",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_3.jpg",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_4.png",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_5.jpg",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_6.jpg",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_7.jpg",
      text: "",
    },
    {
      image: "/resources/img/makeUp/gallery/make_img_8.jpg",
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

export default MakeUpGallery;
