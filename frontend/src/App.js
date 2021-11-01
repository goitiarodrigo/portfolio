import './App.css';
import Home from './pages/Home';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from './pages/About';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}/>
        <Route path="/about" component={About}/>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
