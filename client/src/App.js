import React from "react";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
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
        <Nav>

        </Nav>

        <Switch>
          <Route exact path="/" component={Search}/>
          <Route exact path="/search" component={Search}/>
          <Route exact path="/saved" component={Saved}/>
          <Route path="*" component={NoMatch}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
