import React from 'react'
import image1 from '../../images/image1_wider.jpg'
import image2 from '../../images/image2_wider.jpg'
import image3 from '../../images/image3_wider.jpg'
import image4 from '../../images/image4_wider.jpg'

export default function Row1() {
  return (
      <div className="row py-3 rounded">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 rounded">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="true"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner rounded">
              <div className="carousel-item active">
                <div
                  className="d-flex align-items-center justify-content-center overflow-hidden"
                >
                  <img src={image1} alt="..." />
                </div>
                <div className="carousel-caption">
                  <h5>First slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam molestiae officiis labore doloribus vero at numquam
                    ipsam iure vitae recusandae sit quisquam, quas ex saepe quo
                    sunt deserunt maiores qui?
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="d-flex align-items-center justify-content-center overflow-hidden"
                >
                  <img src={image2} alt="..." />
                </div>
                <div className="carousel-caption">
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam molestiae officiis labore doloribus vero at numquam
                    ipsam iure vitae recusandae sit quisquam, quas ex saepe quo
                    sunt deserunt maiores qui?
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="d-flex align-items-center justify-content-center overflow-hidden"
                >
                  <img src={image3} alt="..." />
                </div>
                <div className="carousel-caption">
                  <h5>Third slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam molestiae officiis labore doloribus vero at numquam
                    ipsam iure vitae recusandae sit quisquam, quas ex saepe quo
                    sunt deserunt maiores qui?
                  </p>
                </div>
              </div>

              <div className="carousel-item">
                <div
                  className="d-flex align-items-center justify-content-center overflow-hidden"
                >
                  <img src={image4} alt="..." />
                </div>
                <div className="carousel-caption">
                  <h5>Fourth slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aliquam molestiae officiis labore doloribus vero at numquam
                    ipsam iure vitae recusandae sit quisquam, quas ex saepe quo
                    sunt deserunt maiores qui?
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev justify-content-start px-5"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <p aria-hidden="true">&#10094;</p>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next justify-content-end px-5"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <p aria-hidden="true">&#10095;</p>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
  )
}
