import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Page from './Components/Page/Page';
import Shop from './Components/Shop/Shop';
import Card from './Card';
import LoremPicsum from './Components/LoremPicsum/LoremPicsum';

function App() {
  const [username, setusername] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(username);
    setusername('');
  };

  const hideFormOnPaths = ['/About', '/Contact', '/Page', '/Shop'];

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Page" element={<Page />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>

      { !hideFormOnPaths.includes(window.location.pathname) && (
        <form
          onSubmit={(e) => submitHandler(e)}
        >
          <input
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="px-4 py-3 rounded text-xl m-5"
            type="text"
            placeholder="Enter Your Name"
          />
          <button className="px-4 py-3 m-5 text-xl font-semibold bg-emerald-600 rounded">
            Submit
          </button>
        </form>
      )}
    </Router>
  );
}

export default App;
