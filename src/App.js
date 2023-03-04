import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import Cards from './components/Cards/Cards';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import About from './components/About/About';

function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<><HomePage />, <Cards></Cards></>} />
      <Route exact path="/about" element={<About />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
