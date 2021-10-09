import "./App.css";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup'
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
