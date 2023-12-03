import Nav from "./components/Nav.js";
import Home from "./pages/Home.js";
import Stories from "./pages/Stories.js";
import About from "./pages/About.js";
import Footer from "./components/Footer.js";
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";

const titles = {
  '/': 'Home',
  '/about': 'About',
}

export default function App() {
  const location = useLocation()
  useEffect(
    () => {document.title = titles[location.pathname] ?? 'Page'}
  )
  return (
    <div class="container-fluid p-3">
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/index" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}
