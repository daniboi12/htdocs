import React from "react";
import Card from "./stories-components/Card.js";
import Spacer from "./stories-components/Spacer.js";
import image1 from "../images/cropped-images/image1.jpg";
import image2 from "../images/cropped-images/image2.jpg";
import image3 from "../images/cropped-images/image3.jpg";
import image4 from "../images/cropped-images/image4.jpg";

export default function Stories() {
  return (
    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-3 py-3">
      <Spacer />

      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image1}
      ></Card>
      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image2}
      ></Card>

      <Spacer />
      <Spacer />

      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image3}
      ></Card>
      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image4}
      ></Card>

      <Spacer />
      <Spacer />

      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image1}
      ></Card>
      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image2}
      ></Card>

      <Spacer />
      <Spacer />

      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image3}
      ></Card>
      <Card
        cardTitle="Card title"
        cardText="Some quick example text to build on the card title and make up the bulk of the card's content."
        cardImg={image4}
      ></Card>

      <Spacer />
    </div>
  );
}
