import './App.css';
import Button from 'react-bootstrap/Button';
import { Route, Switch, Link } from "react-router-dom";
import Navbar from './components/NavBar'
import Homepage from './components/Homepage';
import Generate from './components/Generate';
import Accounts from './components/Accounts';
import Contact from './components/Contact';
import Generate_Resume from './components/Generate_Resume';



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
     
     

      <main>
      <Switch>
        <Route component={Homepage} exact path="/" />
        <Route component={Generate} path="/generate" />
        <Route component={Accounts} path="/accounts" />
        <Route component={Contact} path="/contact-us" />
        <Route component={Generate_Resume} path="/generate-resume" />


      </Switch>
      </main>
      </div>
    </div>
  );
}

export default App;
