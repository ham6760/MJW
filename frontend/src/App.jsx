import { React, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";

import Home from "./pub/pages/Home";
import NotFound from "./pub/pages/notfound/NotFound";
import UserDetail from "./pub/pages/UserDetail";
import { hair, intro, makeUp, wedding } from "./router";
import SmoothScrollWrapper from "./shared/components/SmoothScrollWrapper";
import { ThemeProvider } from "./shared/context/ThemeContext"; // 통합된 ThemeProvider
import Layout from "./shared/layout/Layout";

function App() {
  // App.js
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 120,
      delay: 0,
    });
  }, []);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <SmoothScrollWrapper>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              {intro.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
              {hair.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
              {makeUp.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
              {wedding.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={item.element}
                />
              ))}
              <Route path="/users/:userId" element={<UserDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </SmoothScrollWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
