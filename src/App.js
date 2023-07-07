import "./styles.css";

import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Careers from "./routes/Careers";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";
import Painter from "./routes/Painter";
import Plumber from "./routes/Plumber";
import Electrician from "./routes/Electrician";
import Cleaner from "./routes/Cleaner";


export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/painter" element={<Painter />} />
        <Route path="/plumber" element={<Plumber />} />
        <Route path="/electrician" element={<Electrician />} />
        <Route path="/cleaner" element={<Cleaner />} />

      </Routes>
    </div>
  );
}
