import React from "react";

import ChromaGrid from "../../shared/components/chromaGrid/ChromaGrid";
import PageTop from "../../shared/components/PageTop";
import { usePageConfig } from "../../shared/hooks/usePageConfig";

const HairList = () => {
  const pageData = usePageConfig();

  const items = [
    {
      image: "/resources/img/hair/hair_img_taehuyn.jpg",
      title: "태현",
      subtitle: "TaeHyun, CEO",
      handle: "@taehyun",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
      url: "https://www.instagram.com/mizangwonbytaehyun/",
    },
    {
      image: "/resources/img/hair/hair_img_jinsook.jpg",
      title: "진숙",
      subtitle: "Jin Sook, Hair artist",
      handle: "@jinsook",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "",
    },
    {
      image: "/resources/img/hair/hair_img_gongdeure.jpg",
      title: "공드레",
      subtitle: "Gong Deu Re, Hair artist",
      handle: "@gongdeure",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(165deg, #F59E0B, #000)",
      url: "",
    },
    {
      image: "/resources/img/hair/hair_img_tanil.jpg",
      title: "탄일",
      subtitle: "Tan il, Hair artist",
      handle: "@tanil",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://www.instagram.com/tan_il/",
    },
    {
      image: "/resources/img/hair/hair_img_dogun.jfif",
      title: "도건",
      subtitle: "Do gun, Hair artist",
      handle: "@dogun",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #000)",
      url: "https://www.instagram.com/mzw_gun",
    },
  ];

  return (
    <>
      <PageTop {...pageData} />
      <section data-aos="fade-up" data-aos-delay="100">
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </section>
    </>
  );
};

export default HairList;
