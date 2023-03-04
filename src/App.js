import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import Cards from './components/Cards/Cards';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <Cards></Cards>
    </div>
  );
}

export default App;
