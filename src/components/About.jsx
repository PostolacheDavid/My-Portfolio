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

    // Laptops (992px - 1200px)
    mm.add("(min-width: 992px) and (max-width: 1200px)", () => {
      gsap.set(".about-img", { x: -200, opacity: 0 });
      gsap.set(".info-card", { x: 200, opacity: 0 });

      gsap.to(".about-img", {
        scrollTrigger: {
          trigger: ".about-section",
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

    // Desktops (>= 1201px)
    mm.add("(min-width: 1201px)", () => {
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
          I recently graduated with a Bachelor's degree in Computer Science from
          the University of Bucharest and am now pursuing a Master's in
          Distributed Systems.
          <br />
          <br />
          I'm passionate about building clean, scalable, and user-focused
          applications using modern web technologies. While I’ve worked
          extensively with React, JavaScript, and CSS on the front end, I’m
          expanding my skills toward full-stack development to create complete,
          high-performance solutions.
          <br />
          <br />
          Beyond coding, I’m deeply interested in design and how thoughtful
          UI/UX can transform user experiences. I enjoy working on interactive
          components, smooth animations, and interfaces that are both intuitive
          and visually engaging.
          <br />
          <br />
          I'm currently seeking a full-stack or software engineering position
          where I can contribute, grow, and collaborate with talented teams to
          develop impactful digital products.
          <br />
          <br />
        </p>
      </div>
    </section>
  );
};

export default About;
