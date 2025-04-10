import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profile_picture from "../assets/images/profile_picture4.png";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-img", {
        scrollTrigger: {
          trigger: ".about-img",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        x: -200,
        opacity: 0,
        duration: 5.2,
        ease: "power3.out",
      });

      gsap.from(".info-card", {
        scrollTrigger: {
          trigger: ".info-card",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        x: 100,
        opacity: 0,
        duration: 5.2,
        ease: "power3.out",
      });
    }, aboutRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section" ref={aboutRef}>
      <img src={profile_picture} alt="Profile Picture" className="about-img" />
      <div className="info-card">
        <h2>Lorem Ipsum</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut
          sapien dui. Aliquam ac blandit nunc. Donec sollicitudin sit amet nisi
          at faucibus. Vivamus pulvinar id ante eu tempor. Donec accumsan
          sodales odio, vel tincidunt neque tempor eget. Nullam porta libero nec
          mauris laoreet sollicitudin. Nulla bibendum varius porttitor. Aenean
          egestas justo ac massa lobortis mollis. Fusce sagittis quis arcu vitae
          blandit. Vestibulum mauris ipsum, ultricies vitae tortor eget,
          ullamcorper euismod libero. Ut varius eros lacus, fermentum accumsan
          ex vulputate quis. Proin nec turpis lacinia, consectetur neque eu,
          mollis turpis. Praesent a lacus auctor, ultrices leo tincidunt,
          gravida erat.
        </p>
      </div>
    </section>
  );
};

export default About;
