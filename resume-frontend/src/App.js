import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from './components/NavBar'
import Homepage from './components/Homepage';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
    
       <Navbar></Navbar>
       <Homepage></Homepage>
        
   
      </header>
    </div>
  );
}

export default App;
