import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".contact-info", {
        scrollTrigger: {
          trigger: ".contact-info",
          start: "bottom bottom",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        visibility: "visible",
        duration: 1.5,
        ease: "power3.out",
      });

      gsap.to(".contact-form", {
        scrollTrigger: {
          trigger: ".contact-form",
          start: "bottom bottom",
          end: "bottom 60%",
          toggleActions: "play reverse play reverse",
        },
        x: 0,
        opacity: 1,
        visibility: "visible",
        duration: 1.5,
        ease: "power3.out",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  const [message, setMessage] = useState({
    name: "",
    subject: "",
    email: "",
    content: "",
  });

  const handleChange = (e) => {
    setMessage({ ...message, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form sent");
  };
  return (
    <section id="Contact" className="contact-section" ref={contactRef}>
      <div className="contact-wrapper">
        <article className="contact-info">
          <h1>Interested in working together?</h1>
          <p>
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Drop me a message and I’ll
            get back to you soon.
          </p>
          <h2>Contact Info</h2>
          <p>
            <IoMail className="react-icon" />
            Email address:{" "}
            <a href="mailto:youremail@example.com">
              contact@davidpostolache.com
            </a>
          </p>
          <p>
            <FaLocationDot className="react-icon2" />
            Location: Bucharest, Romania
          </p>
          <div className="socials">
            <a
              href="https://github.com/PostolacheDavid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IoLogoGithub className="socials-logo" />
            </a>
            <IoLogoLinkedin className="socials-logo" />
          </div>
        </article>
        <article className="contact-form">
          <form onSubmit={handleSubmit}>
            <fieldset>
              <h1>Leave me a message!</h1>
              <p>
                <label htmlFor="name" className="offscreen">
                  Name:
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name:"
                  value={message.name}
                  onChange={handleChange}
                />
              </p>
              <p>
                <label htmlFor="email" className="offscreen">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email:"
                  value={message.email}
                  onChange={handleChange}
                />
              </p>
              <p>
                <label htmlFor="subject" className="offscreen">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject:"
                  value={message.subject}
                  onChange={handleChange}
                />
              </p>
              <p>
                <label htmlFor="content" className="offscreen">
                  Your message:
                </label>
                <textarea
                  name="content"
                  id="content"
                  rows="5"
                  cols="40"
                  placeholder="Your message..."
                  value={message.content}
                  onChange={handleChange}
                ></textarea>
              </p>
              <button type="submit">Submit</button>
            </fieldset>
          </form>
        </article>
      </div>
    </section>
  );
};

export default Contact;
