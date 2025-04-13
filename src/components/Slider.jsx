import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(3);
  const itemsRef = useRef([]);

  const slides = [
    "Slide 1",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
    "Slide 6",
    "Slide 7",
  ];

  const loadShow = () => {
    const items = itemsRef.current;
    let stt = 0;

    items.forEach((item, i) => {
      if (!item) return;

      if (i === active) {
        item.style.transform = "none";
        item.style.zIndex = 1;
        item.style.filter = "none";
        item.style.opacity = 1;
      } else if (i > active) {
        stt = i - active;
        item.style.transform = `translateX(${120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      } else {
        stt = active - i;
        item.style.transform = `translateX(${-120 * stt}px) scale(${
          1 - 0.2 * stt
        }) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      }
    });
  };

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
      duration: 3.5,
      ease: "power3.out",
    });
  }, [sliderRef]);

  useEffect(() => {
    loadShow();
  }, [active]);

  return (
    <div className="slider" ref={sliderRef}>
      <h1 className="caption">My Projects!</h1>
      <div className="slider-items">
        {slides.map((text, index) => {
          return (
            <div
              key={index}
              className="card"
              ref={(el) => (itemsRef.current[index] = el)}
            >
              <h1>{text}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat facere in numquam impedit placeat eius cumque
                architecto natus similique.
              </p>
            </div>
          );
        })}
        <button
          id="prev"
          onClick={() => setActive((prev) => (prev > 0 ? prev - 1 : prev))}
        >
          {"<"}
        </button>
        <button
          id="next"
          onClick={() =>
            setActive((prev) => (prev < slides.length - 1 ? prev + 1 : prev))
          }
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Slider;
