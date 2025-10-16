import React from "react";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <Header />

      {/*<MobileNav />*/}

      {/* Content */}
      <main>{children}</main>

      {/* Footer */}
      <Footer />

      {/* JS Scripts */}
      <script src="/resources/js/mjw.js"></script>
    </>
  );
};

export default Layout;
