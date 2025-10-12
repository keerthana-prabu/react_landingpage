import { useState } from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './landing_page/Navbar'
import Home from './landing_page/Home'
import Discover from './landing_page/Discover';
import Contact from './landing_page/contact';
import Book from './landing_page/Book';
import Login from './landing_page/login'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Router>
          <Navbar />
      <Routes>
          <Route path="/" element= {<Login />} />
          <Route path="/home" element= {<Home />} />
          <Route path="/explore" element={<Discover />} />
          <Route path="/about" element={<Contact />} />
          <Route path="/book" element={<Book />} /> 
      </Routes>
      </Router>
      </div>
    </>
  )
}

export default App
