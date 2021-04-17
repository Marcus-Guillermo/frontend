import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from './components/NavBar'
import Homepage from './components/Homepage';
import { Route, Switch, Link } from "react-router-dom";
import Generate from './components/Generate';



function App() {
  return (
    <div className="App">
      <div>
       <nav>
        
      </nav>
      <header className="App-header">
        
       <Navbar></Navbar>
      </header>
      <Link to="/">Home</Link>
      <Link to="/generate">
        <Button>
        Generate
        </Button>
      </Link>
      <main>
      <Switch>
        <Route component={Homepage} exact path="/" />
        <Route component={Generate} path="/generate" />
      </Switch>
      </main>
      </div>
    </div>
  );
}

export default App;
