import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import projects_list from "../data/projects_list";
import { openModal, setLinks } from "../features/modal/modalSlice";

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
    const mm = gsap.matchMedia();

    // Mobile (<= 575px)
    mm.add("(max-width: 575px)", () => {
      gsap.set(".slider", { x: -150, opacity: 0 });

      gsap.to(".slider", {
        scrollTrigger: {
          trigger: ".slider",
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

    // Small Tablets (576px - 767px)
    mm.add("(min-width: 576px) and (max-width: 767px)", () => {
      gsap.set(".slider", { x: -180, opacity: 0 });

      gsap.to(".slider", {
        scrollTrigger: {
          trigger: ".slider",
          start: "bottom bottom",
          toggleActions: "play none play none",
        },
        x: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power3.out",
      });
    });

    // Medium Tablets (768px - 992px)
    mm.add("(min-width: 768px) and (max-width: 992px)", () => {
      gsap.set(".slider", { x: -200, opacity: 0 });

      gsap.to(".slider", {
        scrollTrigger: {
          trigger: ".slider",
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
      gsap.set(".slider", { x: -200, opacity: 0 });

      gsap.to(".slider", {
        scrollTrigger: {
          trigger: ".slider",
          start: "top 90%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
      });
    });

    // Larger screens (>= 1201px)
    mm.add("(min-width: 1201px)", () => {
      gsap.set(".slider", { x: -200, opacity: 0 });

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
    });

    return () => mm.revert();
  }, []);

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
                  dispatch(
                    setLinks({
                      projectLink: slide.link,
                      githubLink: slide.github,
                    })
                  );
                  dispatch(openModal({ isForm: false, isError: false }));
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
