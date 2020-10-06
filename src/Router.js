import React from 'react';
// import logo from './logo.svg';
import Categories from "./components/Categories/Categories";
import Tags from "./components/Tags/Tags";
import Home from "./components/Home/Home";
import Nav from "./components/Navbar/Nav";
import {
  BrowserRouter as Brouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Router extends React.Component {
  render(){
    console.log("Router")
    return (
      <Brouter>
        <div>
          <Nav/>
          <Switch>
            <Route path="/Categories" component={Categories}/>
            <Route path="/Tags" component={Tags}/>
            <Route path="/" exact component={Home}/>
          </Switch>
        </div>
      </Brouter>
    );
  }
}
export default Router
