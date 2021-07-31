import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Blog from './components/Blog';
import Footer from './components/Footer'
import Works from './components/Works';
import NoMatch from './components/NoMatch';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/works'>
          <Works />
        </Route>
        <Route path='/blog'>
          <Blog />
        </Route>
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
