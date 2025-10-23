import React from "react";
import ChromaGrid from "shared/components/chromaGrid/ChromaGrid";
import PageTop from "shared/components/PageTop";
import { usePageConfig } from "shared/hooks/usePageConfig";

const MakeUpList = () => {
  const pageData = usePageConfig();

  const items = [
    {
      image: "/resources/img/makeUp/makeUp_img_hana.jfif",
      title: "하나",
      subtitle: "Hana, MakeUp artist",
      handle: "@hana",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #000)",
      url: "",
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

export default MakeUpList;
