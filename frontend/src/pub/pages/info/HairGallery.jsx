import React from "react";

import PageTop from "../../shared/components/PageTop";

const HairGallery = () => {
  return (
    <>
      <PageTop
        title="Hair Gallery"
        description="헤어 갤러리"
        menuItems={[
          { label: "디자이너", link: "/hair/list" },
          { label: "트렌드", link: "/hair/trend" },
          { label: "갤러리", link: "/hair/gallery" },
        ]}
      />
    </>
  );
};

export default HairGallery;
