import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    gsap.to(".slider", {
      scrollTrigger: {
        trigger: ".slider",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse",
      },
      x: 0,
      opacity: 1,
      duration: 2.5,
      ease: "power3.out",
    });
  }, sliderRef);

  return <div className="slider" ref={sliderRef}></div>;
};

export default Slider;
