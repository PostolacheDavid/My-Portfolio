import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects_list from "../data/projects_list";
import { openModal } from "../features/modal/modalSlice";

gsap.registerPlugin(ScrollTrigger);

const Slider = () => {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(Math.floor(projects_list.length / 2));
  const itemsRef = useRef([]);
  const [slides, setSlides] = useState(projects_list);
  const dispatch = useDispatch();

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
      duration: 1.5,
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
        {slides.map((slide) => {
          return (
            <div key={slide.id} className="card-wrapper">
              <div
                role="button"
                onClick={() => {
                  dispatch(openModal());
                }}
                className="card"
                ref={(el) => (itemsRef.current[slides.indexOf(slide)] = el)}
              >
                <h1>{slide.title}</h1>
                <p>{slide.image}</p>
                <p>{slide.description}</p>
              </div>
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
