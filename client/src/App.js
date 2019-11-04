import React from "react";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav/>

        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/Saved" component={Saved}/>
          {/* <Route path="*" component={NoMatch}/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
