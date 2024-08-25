import React from "react";

function About() {
  return (
    <div className="content">
      <section className="sec">
        <h2 className="heading">Our Story</h2>
        <p className="paragraph">
          Welcome to domazo Food App, where we bring delicious flavors to your
          doorstep! Founded in [2023], domazo is dedicated to providing
          high-quality, mouthwatering meals made with the freshest ingredients.
          Our team of talented chefs and food enthusiasts work tirelessly to
          create a diverse menu that caters to all tastes and preferences We
          take pride in curating high-quality, mouthwatering meals crafted with
          the freshest ingredients sourced from local farms. Each dish is a
          celebration of flavors, made with love and attention to detail by our
          team of talented chefs. Whether you're a culinary adventurer or have a
          specific taste in mind, our diverse menu caters to all preferences.
        </p>
      </section>

      <section className="sec1">
        <h2 className="heading">Meet our Team</h2>
        <div className="team">
          <div className="team-member">
            <p>Pratheek</p>
          </div>
          <div className="team-member">
            <p>Nisarga</p>
          </div>
          <div className="team-member">
            <p>Druthi</p>
          </div>
          <div className="team-member">
            <p>Harshini</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
