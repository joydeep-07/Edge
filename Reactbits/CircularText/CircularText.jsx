import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";
import { FaArrowUp } from "react-icons/fa6";
<<<<<<< HEAD

=======
>>>>>>> a38c9427f2d51dc0caec7c7d6a0c68eec8a53000
const getRotationTransition = (duration, from, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear",
  duration,
  type: "tween",
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration, from) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring",
    damping: 20,
    stiffness: 300,
  },
});

const CircularText = ({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    const start = rotation.get();
    if (!onHover) return;

    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring", damping: 20, stiffness: 300 },
          scale: { type: "spring", damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default:
        transitionConfig = getTransition(spinDuration, start);
    }

    controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    const start = rotation.get();
    controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
<<<<<<< HEAD
    <div className="relative w-[150px] h-[150px] mx-auto">
      {/* Fixed Center Icon - Outside the rotating element */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   text-sm p-7 rounded-full bg-white/20 z-10 rotate-45 flex items-center justify-center"
      >
        <FaArrowUp />
      </div>

      {/* Rotating Text Container */}
      <motion.div
        className={`
          m-0 rounded-full w-full h-full relative
          text-white text-center bg-black cursor-pointer font-medium origin-center
          ${className}
        `}
        style={{ rotate: rotation }}
        initial={{ rotate: 0 }}
        animate={controls}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {/* Inside Border */}
        <div
          className="
            absolute inset-8 rounded-full
            pointer-events-none
          "
        />
        {/* End of Inside Border */}

        {letters.map((letter, i) => {
          const rotationDeg = (360 / letters.length) * i;
          const factor = Math.PI / letters.length;
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

          return (
            <span
              key={i}
              // Changed to text-sm for smaller font size
              className="absolute inline-block inset-0 text-sm transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
    </div>
=======
    <motion.div
      className={`
        m-0 mx-auto rounded-full w-[170px] h-[170px] relative
        text-white text-center cursor-pointer font-medium origin-center
        border-2 border-solid border-white ${className}
      `}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {/* Inside Border */}
      <div
        className="
          absolute inset-8 rounded-full border-2 border-solid border-white
          pointer-events-none
        "
      />
      {/* End of Inside Border */}

      {/* --- Center Icon --- */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                   text-xl text-black p-6 rounded-full bg-white/80 z-10"
      >
        <FaArrowUp />
      </div>
      {/* ------------------- */}

      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        // The factor calculation for positioning the letters remains the same
        const factor = Math.PI / letters.length;
        const x = factor * i;
        const y = factor * i;
        const transform = `rotateZ(${rotationDeg}deg) translate3d(${x}px, ${y}px, 0)`;

        return (
          <span
            key={i}
            // Font size changed from text-2xl to text-xl
            className="absolute inline-block inset-0 text-xl transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
            style={{ transform, WebkitTransform: transform }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
>>>>>>> a38c9427f2d51dc0caec7c7d6a0c68eec8a53000
  );
};

export default CircularText;
