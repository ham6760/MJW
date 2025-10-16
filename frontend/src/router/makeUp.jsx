import React from "react";

import MakeUpGallery from "../pub/pages/makeup/MakeUpGallery";
import MakeUpList from "../pub/pages/makeup/MakeUpList";
export default [
  {
    path: "/makeUp/list",
    element: <MakeUpList />,
  },
  {
    path: "/makeUp/gallery",
    element: <MakeUpGallery />,
  },
];
