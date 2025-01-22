import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        Welcome to Vieta Academy,
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          <p>As a forward-thinking EdTech company, we are committed to empowering students with the knowledge and skills they need to succeed in an ever-evolving world. Our mission is to make quality education accessible, engaging, and impactful for learners everywhere.</p>
          <h2>Our Journey</h2>
           We are starting our exciting venture by offering specialized preparation for the prestigious AMC (American Mathematics Competitions) series, including AMC 8, 10, and 12. These programs are designed to nurture mathematical curiosity, build problem-solving skills, and help students excel in competitive mathematics.


          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            <h1>Our Vision for the Future</h1>
            <p>At Vieta Academy, our vision goes beyond mathematics. As we grow, we plan to expand our offerings to include:
            </p>
            <ul>
              <li>AP Courses: Comprehensive courses designed to help students excel in Advanced Placement exams and gain college credits.</li>
              <li>Technology Courses: Cutting-edge programs in web development, Python, Java, and more to prepare students for careers in the tech-driven world.</li>
            </ul>
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
Why Choose Vieta Academy?

Expert-Led Instruction: Learn from passionate educators and subject-matter experts dedicated to student success.

Interactive Learning: Our engaging content and innovative teaching methods make learning enjoyable and effective.

Comprehensive Resources: From detailed study materials to practice tests, we provide everything students need to achieve their goals.

Flexible Programs: Learn at your own pace with our customizable and on-demand courses.

Join us at Vieta Academy as we revolutionize education and help shape the problem-solvers, innovators, and leaders of tomorrow.<br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1Rd-IB_5pxsGj4RDtHjEggPB392ND29xB/view?usp=sharing"
              }
            >
              my résumè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Frontend Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              JavaScript(ES6+), React, Next.js, TypeScript, Redux, Redux
              Toolkit, React Query, HTML5, Git/GitHub, React Hook Form, Formik.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              UI Libraries
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              CSS3/SCSS/SASS, Tailwind CSS, Styled Components, Chakra UI, Framer
              Motion, Bootstrap, ReCharts.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Design Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Figma, FigJam, UX Research, UI Design, Prototyping.
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
