import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile_picture from "../assets/images/profile_picture4.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    // Mobile devices (<= 575px)
    mm.add("(max-width: 575px)", () => {
      gsap.set(".about-img", { x: -150, opacity: 0 });
      gsap.set(".info-card", { x: 150, opacity: 0 });

      gsap.to(".about-img", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "bottom bottom",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.to(".info-card", {
        scrollTrigger: {
          trigger: ".info-card",
          start: "bottom bottom",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
      });
    });

    // Small tablets (576px - 767px)
    mm.add("(min-width: 576px) and (max-width: 767px)", () => {
      gsap.set(".about-img", { x: -180, opacity: 0 });
      gsap.set(".info-card", { x: 180, opacity: 0 });

      gsap.to(".about-img", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "top 85%",
          toggleActions: "play none play none",
        },
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      });

      gsap.to(".info-card", {
        scrollTrigger: {
          trigger: ".info-card",
          start: "top 85%",
          toggleActions: "play none play none",
        },
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      });
    });

    // Tablets (768px - 992px)
    mm.add("(min-width: 768px) and (max-width: 992px)", () => {
      gsap.set(".about-img", { x: -200, opacity: 0 });
      gsap.set(".info-card", { x: 200, opacity: 0 });

      gsap.to(".about-img", {
        scrollTrigger: {
          trigger: ".about-section",
          start: "bottom bottom",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      });

      gsap.to(".info-card", {
        scrollTrigger: {
          trigger: ".info-card",
          start: "bottom bottom",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power3.out",
      });
    });

    // Desktops (>= 993px)
    mm.add("(min-width: 993px)", () => {
      gsap.set(".about-img", { x: -200, opacity: 0 });
      gsap.set(".info-card", { x: 200, opacity: 0 });

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
    });

    return () => mm.revert();
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
