import React from "react";
import KakaoMap from "services/KakaoMap";
import PageTop from "shared/components/PageTop";
import { useTheme } from "shared/context/ThemeContext";

const Location = () => {
  const { isDarkMode } = useTheme();
  return (
    <div>
      <PageTop
        isDarkMode={isDarkMode}
        title="Location"
        description="미장원 찾아오시는 길"
        menuItems={[
          { label: "인사말", link: "/intro/intro" },
          { label: "샵", link: "/intro/shop" },
          { label: "오시는길", link: "/intro/location" },
        ]}
      />
      <KakaoMap />
    </div>
  );
};

export default Location;
