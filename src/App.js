import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Clothes from "./pages/clothes";
import Hair from "./pages/hair";
import Weather from "./pages/weather";
function App() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hair">Hair</Link>
          </li>
          <li>
            <Link to="/weather">Weather</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/">
            <Clothes />
          </Route>
          <Route path="/hair">
            <Hair />
          </Route>
          <Route path="/weather">
            <Weather />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
