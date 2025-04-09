import profile_picture from "../assets/images/profile_picture4.png";

const About = () => {
  return (
    <section id="about" className="about-section">
      <img src={profile_picture} alt="Profile Picture" />
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
