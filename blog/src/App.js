import "./App.css";
import Home from "./components/Home";
import Login from './components/Login';
import Signup from './components/Signup'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Category from "./components/Category";
import LatestPosts from "./components/LatestPosts";
import Search from "./components/Search";
import SingleBlog from "./components/SingleBlog";
import User from "./components/User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/category/:title' exact component={Category} />
        <Route path='/latest' exact component={LatestPosts} />
        <Route path='/search/:search' exact component={Search} />
        <Route path="/blog/:id" exact component={SingleBlog}/>
        <Route path='/user' exact component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
