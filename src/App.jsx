import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Home from "./Pages/Home";
import Contact from "./Components/Contact";
import Root from "./layout/Root";
import ScrollToTop from "./utils/ScrollToTop";
import Messages from "./Components/Messages";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      direction: "vertical",
      gestureDirection: "vertical",
      smoothTouch: false,
      touchMultiplier: 1.5,
    });
    window.__lenisInstance = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
      delete window.__lenisInstance;
    };
  }, []);

  return (
    <Router>
     
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="messages" element={<Messages />} /> */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
