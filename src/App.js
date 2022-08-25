import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Category from "./pages/category/Category";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import Media from "./pages/media/Media";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/media" element={<Media />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/category" element={<Category />} />
    </Routes>
  );
}

export default App;
