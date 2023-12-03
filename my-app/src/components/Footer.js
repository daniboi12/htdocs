import React from "react";
import logo from "../images/logo_circle_favicon.svg";

export default function Footer() {
  return (
    <div class="row">
      <div class="col p-0">
        <footer className="text-center text-lg-start text-white rounded">
          <div className="container-fluid p-4">
            <div className="row ">
              <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                <div
                  className="rounded-circle bg-white shadow-1-strong d-flex align-items-center justify-content-center mb-4 mx-auto"
                  id="logo-footer-div"
                >
                  <img src={logo} height="130" alt="WITE Logo" loading="lazy" />
                </div>

                <p className="text-center text-white">
                  Where is the end is a blog that explores all the good things
                  that life has to offer.
                </p>

                <ul
                  className="list-unstyled d-flex flex-row justify-content-center"
                  id="socialMediaIcons"
                >
                  <li>
                    <a className="px-2" href="#!">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a className="px-2" href="#!">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="ps-2" href="#!">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-white">
                <h5 className="text-uppercase mb-4">Latest posts</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>When your
                      pet is missing
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Recently
                      found
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>How to
                      adopt?
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Pets for
                      adoption
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Material
                      gifts
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Help with
                      walks
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Volunteer
                      activities
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-white">
                <h5 className="text-uppercase mb-4">Topics</h5>

                <ul className="list-unstyled">
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>General
                      information
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>About the
                      shelter
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Statistic
                      data
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Job
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Tenders
                    </a>
                  </li>
                  <li className="mb-2">
                    <a href="#!" className="text-decoration-none">
                      <i className="fa-solid fa-earth-europe pe-2"></i>Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-white">
                <h5 className="text-uppercase mb-4">Contact</h5>

                <ul className="list-unstyled">
                  <li>
                    <p>
                      <i className="fas fa-map-marker-alt pe-2"></i>Warsaw, 57
                      Street, Poland
                    </p>
                  </li>
                  <li>
                    <p>
                      <i className="fas fa-envelope pe-2 mb-0"></i>
                      contact@example.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center p-3" id="copyright-info-div">
            © 2023 Copyright: Gabriela Bashalova & Daniil Zhelyazkov. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
