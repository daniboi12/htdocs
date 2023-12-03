import React from "react";
import image1 from "../../images/img_link1_small.jpeg";
import image2 from "../../images/img_link2_small.jpeg";

export default function Row3() {
  return (
    <div>
      <div className="row mt-3">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <p className="short-quote fs-4 p-4 font-italic d-flex align-items-center shadow-sm fst-italic text-justify rounded">
            "Life is a beautiful tapestry woven with threads of joy and sorrow,
            and it's in the intricate patterns of both that we find the true art
            of living. Every moment, every experience, every challenge we face,
            is a thread that adds depth and richness to the masterpiece of our
            existence. Embrace the ups and downs, for it's in the contrast of
            colors and textures that the true beauty of life is revealed."
            <br />- Gabriela Bashalova
          </p>
        </div>
        <div className="col-lg-2"></div>
      </div>

      <div className="row mb-3">
        <div className="col-lg-2"></div>
        <div className="col-lg-4 rounded">
          <div className="imgLinkContainer position-relative">
            <img
              className="rounded object-fit-cover"
              src={image1}
              alt=""
            />
            <a
              href="#"
              className="btn btn-primary shadow-sm position-absolute top-50 start-50 translate-middle"
            >
              SEE NOW
            </a>
          </div>
        </div>
        <div className="col-lg-4 rounded give-margin-top">
          <div className="imgLinkContainer position-relative">
            <img
              className="rounded object-fit-cover"
              src={image2}
              alt=""
            />
            <a
              href="#"
              className="btn btn-primary shadow-sm position-absolute top-50 start-50 translate-middle"
            >
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
}
