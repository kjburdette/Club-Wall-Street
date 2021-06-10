import './App.css';
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import SignUp from './components/SignUp';
import Error from './components/Error';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch location={location} key={Location.pathname}>
          <Route exact path="/">
            <Home />
            <Footer />
          </Route>
          <Route exact path="/about">
            <About />
            <Footer />
          </Route>
          <Route exact path="/signup">
            <SignUp />
            <Footer />
          </Route>
          <Route path="*">
            <Error/>
            <Footer />
          </Route>
        </Switch>
      </Router>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
