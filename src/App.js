import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/Homepage/Homepage';
import Cards from './components/Cards/Cards';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <HomePage></HomePage>
      <h1 class="heading">Lets help each other and save the world...</h1>
      <Cards></Cards>
    </div>
  );
}

export default App;
