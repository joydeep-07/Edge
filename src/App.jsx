import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Home from "./Pages/Home";
import Contact from "./Components/Contact";
import Root from "./layout/Root";

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

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
