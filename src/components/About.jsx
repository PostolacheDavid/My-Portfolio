import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile_picture from "../assets/images/profile_picture4.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".about-img", {
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.to(".info-card", {
        scrollTrigger: {
          trigger: ".info-card",
          start: "top 85%",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <img src={profile_picture} alt="Profile Picture" className="about-img" />
      <div className="info-card">
        <h1>Hi, I'm David!</h1>
        <p>
          I am a third-year Computer Science student with a strong interest in
          design, tehnology, and front-end development.
          <br />
          <br />
          I'm passionate about creating clean, responsive, and user-focused
          interfaces using modern web technologies like React, JavaScript, and
          CSS. I love working on interactive components, smooth animations and
          designs that not only look good but feel great to use.
          <br />
          <br />
          Beyond development, I'm deeply interested in the design process and
          how great UI/UX can elevate a product. I'm constantly learning,
          building, and pushing myself to improve both as a developer and as a
          creative problem solver.
          <br />
          <br />
          I'm currently seeking a front-end development internship where I can
          contribute, grow, and work alongside experienced teams to build
          meaningful digital experiences.
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
