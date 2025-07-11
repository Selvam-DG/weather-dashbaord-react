import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import WeatherDashboard from './pages/WeatherDashboard';
import Search from './pages/Search';

export default function App() {

  return ( 
    <Router>
      <Navbar />
      <div className="p">
        <Routes>
          <Route path="/" element= { < Home /> } />
          <Route path="/dashboard" element= { < WeatherDashboard /> } />
          <Route path="/about" element= { < About /> } />
          <Route path="/contact" element= { < Contact/> } />
          <Route path="/search" element= { < Search /> } />
        </Routes>
      </div>
    </Router>
  );

}