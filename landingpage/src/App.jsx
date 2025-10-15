import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./landing_page/Navbar/Navbar";
import Home from "./landing_page/Home/Home";
import Discover from "./landing_page/Discover/Discover";
import Contact from "./landing_page/Contact/Contact";
import Book from "./landing_page/Booking/Book";
import Login from "./landing_page/Login/Login";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Discover />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/book" element={<Book />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
