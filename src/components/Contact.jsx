import { useState } from "react";
import { IoMail, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form sent");
  };
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
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
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
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
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
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </p>
              <p>
                <label htmlFor="message" className="offscreen">
                  Your message:
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  cols="40"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
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
