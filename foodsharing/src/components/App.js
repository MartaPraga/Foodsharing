import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Home } from '../pages/Home/Home'
// import { News } from '../pages/News/News';
// import { About } from '../pages/About/About';
// import { Contact } from '../pages/Contact/Contact';



import './App.css';

function App() {
  return (


    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/"        element={<Home />} />
          {/* <Route path="/news"    element={<News />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
