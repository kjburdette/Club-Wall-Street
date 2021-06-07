import './App.css';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Route path="*">
            <Error/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
