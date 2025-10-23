import React from "react";
import HairGallery from "pub/pages/hair/HairGallery";
import HairList from "pub/pages/hair/HairList";
export default [
  {
    path: "/hair/list",
    element: <HairList />,
  },
  {
    path: "/hair/gallery",
    element: <HairGallery />,
  },
];
