import './App.css';
//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import AboutUs from './pages/AboutUs';

function App() {
  return (
    <div className="App faculty-glyphic-thin">
		  {/* <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/portfolio" element={<h1>Portfolio Page</h1>} />
                <Route path="/team" element={<h1>Team Page</h1>} />
                <Route path="/contact" element={<h1>Contact Page</h1>} />
            </Routes>
        </Router> */}
        <Home/>
    </div>
  );
}

export default App;

