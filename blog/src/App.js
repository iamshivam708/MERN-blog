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
import Archive from "./components/Archive";
import Practice from "./components/Practice";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route path='/category/:text' exact component={Category} />
        <Route path='/latest' exact component={LatestPosts} />
        <Route path='/search/:text' exact component={Search} />
        <Route path="/blog/:id" exact component={SingleBlog}/>
        <Route path='/user' exact component={User} />
        <Route path="/archive/:text" exact component={Archive}/>
        <Route path="/practice/:text" exact component={Practice}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
