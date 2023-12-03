import React from "react";
import Nav from "../components/Nav.js";
import Row1 from "./home-components/Row1";
import Row2 from "./home-components/Row2";
import Row3 from "./home-components/Row3";
import Footer from "../components/Footer.js";

export default function Body() {
  return (
    <>
      <Row1></Row1>
      <Row2></Row2>
      <Row3></Row3>
    </>
  );
}
