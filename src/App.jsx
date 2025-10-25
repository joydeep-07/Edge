import React, { useEffect } from "react";
import Home from "./Pages/Home";
import Lenis from "@studio-freight/lenis";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.5, 
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

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-black text-white">
      <Home />
    </div>
  );
};

export default App;
