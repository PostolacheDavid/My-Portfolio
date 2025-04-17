import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  return (
    <section id="Contact" className="contact-section">
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
            <IoLogoGithub className="socials-logo" />
            <IoLogoLinkedin className="socials-logo" />
          </div>
        </article>
        <article className="contact-form"></article>
      </div>
    </section>
  );
};

export default Contact;
