import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

const pageVariants = {
  initial: {
    opacity: 0,
    y: "60px",
    filter: "blur(6px)",
  },
  in: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 1, 0.5, 1], // smooth & premium
    },
  },
  out: {
    opacity: 0,
    y: "-60px", // slide slightly upward when exiting
    filter: "blur(6px)",
    transition: {
      duration: 0.4,
      ease: [0.83, 0, 0.17, 1], // refined exit
    },
  },
};

const AnimatedRoute = () => {
  const location = useLocation();
  useEffect(() => {
    if (window.lenis) {
      
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="in"
        exit="out"
        className="min-h-screen w-full will-change-transform overflow-hidden"
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimatedRoute;
