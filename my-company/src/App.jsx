import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About"
import Services from "./components/Services";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";


function App() {
  const [count, setCount] = useState(0)

  return (
     <BrowserRouter>
     <Navbar />
      <Routes>
        {/* Define routes for the four pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
