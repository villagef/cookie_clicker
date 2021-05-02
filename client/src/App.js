import "./App.css";
import Home from "./pages/Home";
import Achievments from "./pages/Achievements";
import Store from "./pages/Store";
import NavigationBar from "./components/NavigationBar";
import Popper from "./components/Popper";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Popper />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/achievements">
            <Achievments />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
        </Switch>
        <NavigationBar />
      </div>
    </Router>
  );
}
