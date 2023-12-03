import React, { useEffect } from "react";

export default function About() {
  return (
    <div className="row py-3">
      <div className="col-lg-2"></div>
      <div className="px-3 col-lg-4 text-justify d-flex align-items-center justify-content-center flex-column">
        <h3>About Me</h3>
        <p>
          Hello, I'm Gabriela Bashalova, and I'm the face behind the keyboard,
          penning down my thoughts and experiences for the world to read. By
          day, I'm a diligent dentistry student in the heart of Germany, diving
          into the fascinating world of oral health. But when the sun sets and
          my textbooks take a break, I transform into a passionate blogger.
          <br />
          <br />
          I find joy in sharing my adventures, insights, and musings on life as
          a student and everything in between. From the complexities of dental
          anatomy to the joys of exploring new places, my journey is a colorful
          tapestry of academia and adventure.
          <br />
          <br />
          Join me as I navigate the dual worlds of teeth and tales, bringing you
          along for the ride through the lens of my words and the heart of my
          experiences. Together, we'll explore the intersection of dentistry and
          storytelling, and who knows, we might just uncover a secret or two
          about keeping those smiles bright!
        </p>
      </div>
      <div className="px-3 col-lg-4 d-flex align-items-center justify-content-center overflow-hidden rounded shadow">
        <img src="images/me-portrait.jpeg" alt="me" />
      </div>
      <div className="col-lg-2"></div>
    </div>
  );
}