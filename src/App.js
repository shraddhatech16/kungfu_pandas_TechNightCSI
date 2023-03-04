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
import SampleTemplate from './components/SampleTemplate/SampleTemplate';
import SampleTemplate2 from './components/SampleTemplate2/SampleTemplate2';

function App() {
  return (
    
    <div className="App">
      
      <Router>
      <Navbar></Navbar>
      <Routes>
      <Route exact path="/" element={<><HomePage />, <Cards></Cards></>} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/template1" element={<SampleTemplate />} />
      <Route exact path="/template2" element={<SampleTemplate2 />} />

      </Routes>
      </Router>
    </div>
  );
}

export default App;
