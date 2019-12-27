import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "loaders.css/loaders.min.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Avengers from "./pages/Avengers";
import StarWars from "./pages/StarWars";

function App() {
  return (
    <Router>
      <div className="fluid-container">
        <Header />

        <div className="row">
          <div className="col-md-12 p-5">
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/avengers" component={Avengers} />
              <Route path="/star-wars" component={StarWars} />
              <Route path="/" component={Home} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
