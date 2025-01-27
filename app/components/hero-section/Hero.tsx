// "use client";
// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import {
//   delay,
//   easeIn,
//   easeInOut,
//   motion,
//   useScroll,
//   useTransform,
// } from "framer-motion";
// // @ts-ignore
// import "intersection-observer";
// import { useInView } from "react-intersection-observer";
// import { useView } from "@/contexts/ViewContext";

// export default function Hero() {
//   const handWaveAnimation = {
//     rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
//     transition: {
//       duration: 1.5,
//       ease: easeInOut,
//     },
//   };

//   const animateIn1 = {
//     opacity: [0, 1],
//     y: ["1rem", "0px"],
//     transition: {
//       delay: 1.5,
//       duration: 0.7,
//       ease: easeIn,
//     },
//   };

//   const animateIn2 = {
//     ...animateIn1,
//     transition: {
//       ...animateIn1.transition,
//       delay: 2,
//     },
//   };

//   const { setSectionInView } = useView();

//   const imgRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: imgRef,
//   });

//   const { ref, inView } = useInView({
//     threshold: 0.4,
//     rootMargin: "-100px 0px",
//   });

//   useEffect(() => {
//     if (inView) setSectionInView("home");
//   }, [inView, setSectionInView]);

//   const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

//   return (
//     <section
//       ref={ref}
//       className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
//       id="home"
//     >
//       <div className="text sm:w-[60%]">
//         <motion.div
//           className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.1, ease: "easeOut" }}
//         >
//           <p className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6">
//             Hello
//           </p>
//           <motion.div
//             animate={handWaveAnimation}
//             style={{ transformOrigin: "bottom right" }}
//             className="col-span-3"
//           >
          
//           </motion.div>
//         </motion.div>
//         <motion.h1
//           className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
//           initial={{ opacity: 0 }}
//           animate={animateIn1}
//         >
//           <p className="text-white/60 inline"></p>
//           <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
//             Vieta Academy
//           </span>
//           <p>Connecting</p>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={animateIn2}
//           className="text-white/40  text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6 "
//         >
//           currently focused on building user experiences that drive growth.
//         </motion.p>
//       </div>

//    </section>
//   );
// }

"use client";
import React, { useEffect, useRef } from "react";
import { easeIn, easeInOut, motion, useScroll, useTransform } from "framer-motion";
// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";

export default function Hero() {
  const handWaveAnimation = {
    rotate: [0, 15, -10, 15, -10, 15, -10, 15, -10, 15, 0],
    transition: {
      duration: 1.5,
      ease: easeInOut,
    },
  };

  const animateIn1 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 1, // Starts after "Hello" animation
      duration: 0.7,
      ease: easeIn,
    },
  };

  const animateIn2 = {
    opacity: [0, 1],
    y: ["1rem", "0px"],
    transition: {
      delay: 2.5, // Slight delay for smoothness
      duration: 0.5,
      ease: easeIn,
    },
  };

  const { setSectionInView } = useView();

  const imgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: imgRef,
  });

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("home");
  }, [inView, setSectionInView]);

  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "-15deg"]);

  return (
    <section
      ref={ref}
      className="pt-36 sm:pt-0 flex flex-col sm:flex-row h-dvh items-center gap-6 sm:justify-between"
      id="home"
    >
      <div className="text sm:w-[60%]">
        {/* Typing animation for "Hello" */}
        <motion.div
          className="grid grid-cols-9 w-fit smm:flex gap-2 mb-2 xl:mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1, ease: "easeOut" }}
        >
          <motion.p
            className="text-white/60 text-xl smm:text-2xl mb-3 smm:mb-0 lg:text-3xl col-span-6 typing-animation"
            initial={{ opacity: 1 }}
            animate={{
              clipPath: ["inset(0% 100% 0% 0%)", "inset(0% 0% 0% 0%)"],
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{
              display: "inline-block",
              whiteSpace: "nowrap",
              overflow: "hidden",
              clipPath: "inset(0% 100% 0% 0%)",
            }}
          >
            Hello
          </motion.p>
          <motion.div
            animate={handWaveAnimation}
            style={{ transformOrigin: "bottom right" }}
            className="col-span-3"
          ></motion.div>
        </motion.div>

        {/* Vieta Academy Title */}
        <motion.h1
          className="text-[32px] smm:text-[40px] md:text-5xl lg:text-6xl xl:text-7xl leading-tight font-bold"
          initial={{ opacity: 0 }}
          animate={animateIn1}
        >
          <p className="text-white/60 inline"></p>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#7CC0C4] via-[#548FBA] to-[#3C84C7]">
            Vieta Academy
          </span>
          <p>Connecting</p>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={animateIn2}
          className="text-white/40 text-xl smm:text-2xl lg:text-3xl xl:text-4xl mt-3 smm:mt-6"
        >
          A tagline or maybe description that fits a it maybe?
        </motion.p>
      </div>
    </section>
  );
}

