import React from "react";

import Intro from "../pub/pages/intro/Intro";
import Location from "../pub/pages/intro/Location";
import Shop from "../pub/pages/intro/Shop";
export default [
  {
    path: "/intro/intro",
    element: <Intro />,
  },
  {
    path: "/intro/shop",
    element: <Shop />,
  },
  {
    path: "/intro/location",
    element: <Location />,
  },
];
