import { useLocation } from "react-router-dom";

import { pageConfig } from "../../config/pageConfig";
import { sectionMenus } from "../../config/sectionMenus";

export const usePageConfig = () => {
  const location = useLocation();

  const getPageData = () => {
    const pathKey = location.pathname.slice(1);
    const config = pageConfig[pathKey];

    if (!config) {
      return {
        title: "Page Not Found",
        description: "",
        menuItems: [],
      };
    }

    const menuItems = sectionMenus[config.section] || [];

    return {
      title: config.title,
      description: config.description,
      menuItems: menuItems,
    };
  };

  return getPageData();
};
